import React, { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

import SelectProps from './interfaces';
import styles from './select.module.scss';

const Select = (props: SelectProps) => {
  const {
    onChange,
    options,
    required = false,
    placeholder = null,
    label,
    defaultValue = undefined,
  } = props;
  const [listOptions, setListOptions] = useState<string[]>([]);
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [selected, setSelected] = useState<string | undefined>(defaultValue ?? undefined);
  const selectRef = useRef<HTMLDivElement | null>(null);
  const dropdownRef = useRef<HTMLUListElement | null>(null);
  const selectedValue = selected && selected !== '' ? selected : placeholder;
  const ariaLabelledBy = label ? { 'aria-labelledby': 'listbox-label' } : {};
  let timeoutId: null | ReturnType<typeof setTimeout> = null;

  const openSelect = () => {
    setShowDropdown(!showDropdown);
  };

  const handleChangeValue = (value: string) => {
    setSelected(value);
    onChange(value);
    setShowDropdown(false);
  };

  const handleOpenWithKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (!showDropdown && (e.key === ' ' || e.key === 'ArrowDown' || e.key === 'ArrowUp')) {
      e.preventDefault();
      setShowDropdown(true);
    }
  };

  const handleListKeydown = (e: React.KeyboardEvent<HTMLUListElement>) => {
    switch (e.key) {
      case ' ':
      case 'Enter':
        e.preventDefault();
        setSelected(listOptions[selectedIndex]);
        returnFocusToSelect();
        break;
      case 'Escape':
        e.preventDefault();
        returnFocusToSelect();
        break;
      case 'ArrowUp':
        e.preventDefault();
        setSelectedIndex(selectedIndex !== 0 ? selectedIndex - 1 : listOptions.length - 1);
        break;
      case 'ArrowDown':
        e.preventDefault();
        setSelectedIndex(selectedIndex !== listOptions.length - 1 ? selectedIndex + 1 : 0);
        break;
      case 'Tab':
        e.preventDefault();
        returnFocusToSelect();
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    if (showDropdown) {
      dropdownRef.current && dropdownRef.current.focus();
    }
  }, [showDropdown]);

  const returnFocusToSelect = () => {
    selectRef.current && selectRef.current.focus();
    setShowDropdown(false);
  };

  useEffect(() => {
    if (placeholder) {
      setListOptions([placeholder, ...options]);
    } else {
      setListOptions(options);
    }
    setSelectedIndex(defaultValue ? listOptions.indexOf(defaultValue) + 1 : 0);
  }, []);

  const renderLiStylesheet = (option: string) => {
    if (selected === '' && option === placeholder) return styles.selected;
    return option === selected ? styles.selected : undefined;
  };

  const onBlurHandler = () => {
    timeoutId = setTimeout(() => {
      setShowDropdown(false);
    });
  };

  const onFocusHandler = () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
  };

  return (
    <div>
      {label && (
        <span id={'listbox-label'}>
          {label}
          {required && <>&nbsp;*</>}
        </span>
      )}
      <div
        className={styles.arrowSelect}
        role="button"
        onClick={openSelect}
        aria-haspopup="listbox"
        aria-expanded={showDropdown}
        tabIndex={0}
        onKeyDown={(e) => handleOpenWithKeyDown(e)}
        ref={selectRef}
        onBlur={onBlurHandler}
        onFocus={onFocusHandler}
        data-testid="listbox-button"
        {...ariaLabelledBy}
      >
        <span>{selectedValue}</span>
        <FontAwesomeIcon icon={faChevronDown} />
        {showDropdown && (
          <ul
            tabIndex={-1}
            role="listbox"
            ref={dropdownRef}
            onKeyDown={(e) => handleListKeydown(e)}
            className={styles.dropdown}
            {...ariaLabelledBy}
          >
            {listOptions.map((option, index) => {
              return (
                <li
                  key={option}
                  role="option"
                  aria-selected={selectedIndex === index}
                  onClick={() => handleChangeValue(option)}
                  className={renderLiStylesheet(option)}
                >
                  {option}
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Select;
