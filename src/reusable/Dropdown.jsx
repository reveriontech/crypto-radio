import React, { useState, useRef, useEffect } from "react";
import "./Dropdown.scss";

/**
 * Dropdown component
 * @param {string} label - The label for the dropdown
 * @param {Array<{ label: string, value: any }>} options - The dropdown options
 * @param {any} value - The currently selected value
 * @param {function} onChange - Callback when selection changes
 * @param {string} placeholder - Placeholder text when no value is selected
 */
const Dropdown = ({ label, options, value, onChange, placeholder = "Select..." }) => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Keyboard navigation
  function handleKeyDown(e) {
    if (e.key === "Escape") setOpen(false);
    if (e.key === "Enter" || e.key === " ") setOpen((prev) => !prev);
  }

  return (
    <div className="dropdown" ref={dropdownRef} tabIndex={0} onKeyDown={handleKeyDown}>
      {label && <label className="dropdown-label">{label}</label>}
      <button
        className="dropdown-toggle"
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((prev) => !prev)}
      >
        <span>{options.find((opt) => opt.value === value)?.label || placeholder}</span>
        <span className="dropdown-arrow" aria-hidden>▼</span>
      </button>
      {open && (
        <ul className="dropdown-menu" role="listbox">
          {options.map((opt, idx) => (
            <li
              key={opt.value}
              className={`dropdown-option${value === opt.value ? " selected" : ""}`}
              role="option"
              aria-selected={value === opt.value}
              tabIndex={-1}
              onClick={() => {
                onChange(opt.value);
                setOpen(false);
              }}
            >
              {opt.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown; 