"use strict";

class CountryInfoApp {
  constructor() {
    // DOM Elements
    this.searchEl = document.querySelector("#search");
    this.searchBtn = document.querySelector("#search-btn");
    this.countryEl = document.querySelector(".country-info");
    this.countryFlagEl = document.querySelector(".country-flag");
    this.additionalInfoEl = document.querySelector(".country-additional-info");
    this.pEl = document.querySelector(".loading");
    this.borderEl = document.querySelector(".borders");
    this.informationSection = document.querySelector(".information");

    // Bind events
    this.searchBtn.addEventListener("click", this.searchCountry.bind(this));
    this.searchEl.addEventListener("keyup", (e) => {
      if (e.key === "Enter") this.searchCountry();
    });
  }

  // Clear previous search results
  clearResults() {
    this.countryEl.innerHTML = "";
    this.countryFlagEl.innerHTML = "";
    this.additionalInfoEl.innerHTML = "";
    this.borderEl.innerHTML = "";
    this.pEl.textContent = "";
  }

  // Format number with commas
  formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  // Search for a country
  async searchCountry() {
    const countryName = this.searchEl.value.trim();
    if (!countryName) return;

    this.clearResults();
    this.pEl.textContent = "Searching...";

    try {
      // Fetch country details
      const res = await fetch(
        `https://restcountries.com/v3.1/name/${countryName}?fullText=true`
      );

      if (!res.ok) {
        throw new Error("Country not found");
      }

      const [data] = await res.json();

      // Display main country information
      this.displayMainCountryInfo(data);

      // Display additional information
      this.displayAdditionalInfo(data);

      // Fetch and display border countries
      if (data.borders && data.borders.length > 0) {
        await this.displayBorderCountries(data.borders);
      } else {
        this.borderEl.innerHTML = "<p>No neighboring countries found</p>";
      }

      this.pEl.textContent = "";
    } catch (error) {
      this.pEl.textContent =
        error.message || "An error occurred while fetching country information";
      console.error(error);
    }
  }

  // Display main country information
  displayMainCountryInfo(data) {
    // Flag
    this.countryFlagEl.innerHTML = `
            <img src="${data.flags.png}" alt="${
      data.flags.alt || "Flag of " + data.name.common
    }">
        `;

    // Basic info
    this.countryEl.innerHTML = `
            <h2>${data.name.common}</h2>
            <p><strong>Official Name:</strong> ${data.name.official}</p>
            <p><strong>Region:</strong> ${data.region}</p>
            <p><strong>Subregion:</strong> ${data.subregion || "N/A"}</p>
        `;
  }

  // Display additional country information
  displayAdditionalInfo(data) {
    const languages = data.languages
      ? Object.values(data.languages).join(", ")
      : "N/A";
    const currencies = data.currencies
      ? Object.values(data.currencies)
          .map((c) => `${c.name} (${c.symbol})`)
          .join(", ")
      : "N/A";

    this.additionalInfoEl.innerHTML = `
            <div>
                <strong>Population:</strong>
                <p>${this.formatNumber(data.population)}</p>
            </div>
            <div>
                <strong>Capital:</strong>
                <p>${data.capital?.[0] || "N/A"}</p>
            </div>
            <div>
                <strong>Languages:</strong>
                <p>${languages}</p>
            </div>
            <div>
                <strong>Currencies:</strong>
                <p>${currencies}</p>
            </div>
        `;
  }

  // Display border countries
  async displayBorderCountries(borders) {
    // Limit to first 5 borders to prevent overwhelming the display
    this.informationSection.classList.remove("hidden");
    const limitedBorders = borders.slice(0, 5);

    const borderPromises = limitedBorders.map(async (border) => {
      const res = await fetch(`https://restcountries.com/v3.1/alpha/${border}`);
      return res.json();
    });

    const borderCountries = await Promise.all(borderPromises);

    this.borderEl.innerHTML = borderCountries
      .map(
        ([country]) => `
            <div class="border-country">
                <img src="${country.flags.png}" alt="${
          country.flags.alt || "Flag of " + country.name.common
        }">
                <h4>${country.name.common}</h4>
            </div>
        `
      )
      .join("");
  }
}

// Initialize the app when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  new CountryInfoApp();
});
