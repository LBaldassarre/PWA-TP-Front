import "./Filters.css";

import Filter from "../Filter/Filter";

export default function Filters({ filterCharacter }) {

    return (
        <nav className="navbar navbar-expand-lg justify-content-center align-items-center">
            <div className="d-flex container-fluid gx-0 justify-content-between align-items-center">
                <div className="aligner d-flex justify-content-center align-items-center">
                    <div className="filter-header d-flex align-items-center justify-content-between">
                        <h2 className="f-h navbar-brand">Filters</h2>
                        <div className="f-b align-items-center">
                            <button className="filter-btn navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <svg width="28" height="28" viewBox="0 0 40 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <line y1="3.5" x2="40" y2="3.5" stroke="#6ECCAF" />
                                    <line y1="14.5" x2="40" y2="14.5" stroke="#6ECCAF" />
                                    <line y1="26.5" x2="40" y2="26.5" stroke="#6ECCAF" />
                                    <circle cx="33.5" cy="3.5" r="3" fill="#344D67" stroke="#6ECCAF" />
                                    <circle cx="20.5" cy="26.5" r="3" fill="#344D67" stroke="#6ECCAF" />
                                    <circle cx="7.5" cy="14.5" r="3" fill="#344D67" stroke="#6ECCAF" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                    <div className="filter-container d-flex justify-content-center">
                        <form className="filter-buttons nav nav-pills justify-content-center">
                            <Filter className="nav-item" filterName="Alive" title="Character Alive" filterCharacter={filterCharacter} />
                            <Filter className="nav-item" filterName="Dead" title="Character Dead" filterCharacter={filterCharacter} />
                            <Filter className="nav-item" filterName="Female" title="Female" filterCharacter={filterCharacter} />
                            <Filter className="nav-item" filterName="Male" title="Male" filterCharacter={filterCharacter} />
                            <Filter className="nav-item" filterName="Unknown" title="Origin Unknown" filterCharacter={filterCharacter} />
                            <Filter className="nav-item" filterName="Favorite" title="Favorite" filterCharacter={filterCharacter} />
                        </form>
                    </div>
                </div>
            </div>
        </nav>
    )
}