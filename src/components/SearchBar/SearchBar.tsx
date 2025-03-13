import { useState } from "react";
import toast from "react-hot-toast";
import { FaSistrix } from "react-icons/fa";
import s from "./SearchBar.module.css";

interface SearchBarProps {
  onSubmit: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSubmit }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchQuery.trim() === "") {
      toast.error("Please enter a search query.");
      return;
    }
    onSubmit(searchQuery);
    setSearchQuery("");
  };

  return (
    <header className={s.Searchbar}>
      <form className={s.SearchForm} onSubmit={handleSubmit}>
        <input
          className={s.SearchFormInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={searchQuery}
          onChange={handleChange}
        />
        <button
          type="submit"
          className={s.SearchFormButton}
          aria-label="Search"
        >
          <FaSistrix size={18} />
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
