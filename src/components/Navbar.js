import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [open, setOpen] = React.useState(false);
  const [active, setActive] = React.useState('Artificial Intelligence');
  const [activePython, setActivePython] = React.useState(false);
  const [closeTimeout, setCloseTimeout] = React.useState(null);
  const [showSearchSuggestions, setShowSearchSuggestions] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState('');

  const categories = [
    {
      key: 'Artificial Intelligence',
      subs: [
        {
          key: 'Python',
          subs: [
            'NumPy',
            'Pandas',
            'Matplotlib',
            'Seaborn',
            'Scikit-learn',
            'TensorFlow',
            'PyTorch',
          ],
        },
        'Machine Learning',
        'Deep Learning',
        'Natural Language Processing',
        'Computer Vision',
        'AI Ethics & Safety',
        'AI in IoT & Robotics',
      ],
    },
    {
      key: 'Internet of Things',
      subs: [
        'Smart Homes',
        'Industrial IoT',
        'IoT Security',
        'Sensors & Microcontrollers',
      ],
    },
    {
      key: 'Robotics',
      subs: [
        'Robotics Programming',
        'Drone Technology',
        'Robot Design & Automation',
      ],
    },
    {
      key: 'Embedded Systems',
      subs: [
        'C/C++ for Embedded Systems',
        'Microcontrollers (Arduino, Raspberry Pi)',
        'Sensors & Actuators',
        'Circuit Design & PCB',
      ],
    },
    {
      key: 'Programming & Software Development',
      subs: [
        'Python for AI & IoT',
        'Data Structures & Algorithms',
        'Cloud & Backend Development',
      ],
    },
    {
      key: 'Data Science & Analytics',
      subs: [
        'Big Data',
        'Data Visualization',
        'Predictive Analytics',
        'Business Intelligence',
      ],
    },
    {
      key: 'Hardware & Electronics',
      subs: [
        'Microcontrollers (Arduino, Raspberry Pi)',
        'Sensors & Actuators',
        'Circuit Design & PCB',
      ],
    },
    {
      key: 'Emerging Tech',
      subs: ['Edge Computing', 'Quantum Computing Basics'],
    },
  ];

  const searchSuggestions = [
    'AI for Beginners',
    'Full-Stack Web Development',
    'Mastering Python',
    'Machine Learning Bootcamp',
    'React Projects for Practice',
  ];

  // Hover delay logic
  const handleMouseEnter = () => {
    if (closeTimeout) clearTimeout(closeTimeout);
    setOpen(true);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => setOpen(false), 200);
    setCloseTimeout(timeout);
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchValue(suggestion);
    setShowSearchSuggestions(false);
  };

  return (
    <nav className="navbar">
      {/* Logo */}
      <Link
        to="/"
        className="logo"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          cursor: 'pointer',
          textDecoration: 'none',
        }}
      >
        <img
          src="fin.png"
          alt="TechKnots Logo"
          className="logo-img"
          style={{ width: '80px', background: 'transparent', display: 'block' }}
        />
        <span
          className="brand-text"
          style={{ color: '#025b33ff', fontWeight: 700, fontSize: '1.125rem' }}
        >
          TechKnots
        </span>
      </Link>

      {/* Navbar Links */}
      <div className="nav-links">
        <div
          className="dropdown"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <button className="dropbtn">Explore ▼</button>

          {open && (
            <div className="dropdown-content three-column">
              {/* Left column: main categories */}
              <div className="left-column">
                {categories.map((cat) => (
                  <div
                    key={cat.key}
                    className={`main-item ${active === cat.key ? 'active' : ''}`}
                    onMouseEnter={() => {
                      setActive(cat.key);
                      setActivePython(false);
                    }}
                    role="button"
                    tabIndex={0}
                  >
                    {cat.key}
                  </div>
                ))}
              </div>

              {/* Middle column: subs */}
              <div className="middle-column">
                {(categories.find((c) => c.key === active) || { subs: [] }).subs.map(
                  (sub) =>
                    typeof sub === 'string' ? (
                      <div key={sub} className="sub-item">
                        {sub}
                      </div>
                    ) : (
                      <div
                        key={sub.key}
                        className="sub-item has-submenu"
                        onMouseEnter={() => setActivePython(true)}
                        onMouseLeave={() => setActivePython(false)}
                      >
                        {sub.key} ▶
                        {activePython && active === 'Artificial Intelligence' && (
                          <div className="python-submenu">
                            {sub.subs.map((lib) => (
                              <div key={lib} className="sub-item">
                                {lib}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    )
                )}
              </div>
            </div>
          )}
        </div>

        {/* ✅ Search Bar with clickable tag-style suggestions */}
        <div className="search-container">
          <input
            type="text"
            className="search-bar"
            placeholder="Search for courses..."
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            onFocus={() => setShowSearchSuggestions(true)}
            onBlur={() => setTimeout(() => setShowSearchSuggestions(false), 200)}
          />
          {showSearchSuggestions && (
            <div className="search-suggestions">
              <p className="suggestion-heading">Popular Searches</p>
              <div className="suggestion-tags">
                {searchSuggestions.map((suggestion, index) => (
                  <span
                    key={index}
                    className="suggestion-tag"
                    onClick={() => handleSuggestionClick(suggestion)}
                  >
                    {suggestion}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Buttons */}
        <Link to="/contact" className="btn">
          Contact
        </Link>
        <Link to="/login" className="btn">
          Login
        </Link>
        <Link to="/signup" className="btn">
          Sign Up
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
  