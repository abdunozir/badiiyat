function HeaderSearch() {
  return (
    <div className="header-search-container">
      <h1 className="header-search__title">Qidirish</h1>
      <div className="header-search__from">
        <input
          type="text"
          placeholder="Adiblar, kitoblar, audiolar, maqolalar..."
        />
        <button>
          <svg
            width="20"
            height="19"
            viewBox="0 0 20 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.97656 16.2214C10.8226 16.2214 12.5196 15.5864 13.8736 14.5334L18.2696 18.9294L19.6836 17.5154L15.2876 13.1194C16.3416 11.7644 16.9766 10.0674 16.9766 8.22144C16.9766 3.81044 13.3876 0.221436 8.97656 0.221436C4.56556 0.221436 0.976562 3.81044 0.976562 8.22144C0.976562 12.6324 4.56556 16.2214 8.97656 16.2214ZM8.97656 2.22144C12.2856 2.22144 14.9766 4.91244 14.9766 8.22144C14.9766 11.5304 12.2856 14.2214 8.97656 14.2214C5.66756 14.2214 2.97656 11.5304 2.97656 8.22144C2.97656 4.91244 5.66756 2.22144 8.97656 2.22144Z"
              fill="#3C2710"
            />
          </svg>
          <span>Izlash</span>
        </button>
      </div>
    </div>
  );
}

export default HeaderSearch;
