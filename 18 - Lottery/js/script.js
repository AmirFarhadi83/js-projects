"use strict";

class LotteryApp {
  constructor() {
    // Initial fake data for participants
    this.initialParticipants = [
      { id: 1, fullName: "امیر فرهادی", playing: true },
      { id: 2, fullName: "سارا محمدی", playing: true },
      { id: 3, fullName: "محمد رضایی", playing: true },
      { id: 4, fullName: "نازنین کریمی", playing: true },
      { id: 5, fullName: "علی اکبری", playing: true },
      { id: 6, fullName: "زهرا حسینی", playing: true },
      { id: 7, fullName: "رضا پورآقایی", playing: true },
      { id: 8, fullName: "فاطمه نادری", playing: true },
    ];

    // DOM Elements
    this.participantInput = document.getElementById("participant-input");
    this.addParticipantBtn = document.getElementById("add-participant");
    this.participantListEl = document.querySelector(".participant-list");
    this.previousListEl = document.querySelector(".previous-list");
    this.winnerNameEl = document.querySelector(".winner-name");
    this.startBtn = document.querySelector(".random");
    this.modal = document.getElementById("result-modal");
    this.modalWinnerText = document.querySelector(".modal-winner-text");
    this.closeModalBtn = document.querySelector(".close-modal");
    this.confirmModalBtn = document.querySelector(".confirm-modal");

    // State variables
    this.players = [];
    this.lastWinners = [];

    // Bind events
    this.bindEvents();

    // Initialize the app
    this.loadInitialData();
  }

  bindEvents() {
    this.addParticipantBtn.addEventListener("click", () =>
      this.addParticipant()
    );
    this.startBtn.addEventListener("click", () => this.startLottery());
    this.participantInput.addEventListener("keyup", (e) => {
      if (e.key === "Enter") this.addParticipant();
    });
    this.closeModalBtn.addEventListener("click", () => this.closeModal());
    this.confirmModalBtn.addEventListener("click", () => this.closeModal());
  }

  loadInitialData() {
    // Check if there's saved data in localStorage
    const savedPlayers = JSON.parse(localStorage.getItem("players"));
    const savedWinners = JSON.parse(localStorage.getItem("winners"));

    // If no saved data, use initial participants
    this.players =
      savedPlayers || this.initialParticipants.filter((p) => p.playing);
    this.lastWinners = savedWinners || [];

    this.updateUI();
  }

  addParticipant() {
    const name = this.participantInput.value.trim();
    if (!name) return;

    const newParticipant = {
      id: Date.now(),
      fullName: name,
      playing: true,
    };

    this.players.push(newParticipant);
    this.participantInput.value = "";
    this.updateUI();
    this.saveData();
  }

  startLottery() {
    if (this.players.length === 0) {
      this.showModal("متاسفانه شرکت کننده‌ای وجود ندارد");
      return;
    }

    const randomIndex = Math.floor(Math.random() * this.players.length);
    const winner = this.players[randomIndex];

    this.winnerNameEl.textContent = winner.fullName;
    this.modalWinnerText.textContent = `برنده امروز: ${winner.fullName}`;

    // Remove winner from players and add to last winners
    this.players.splice(randomIndex, 1);
    this.lastWinners.unshift(winner);

    this.updateUI();
    this.saveData();
    this.showModal();
  }

  updateUI() {
    // Update participants list
    this.participantListEl.innerHTML = this.players
      .map((person) => `<li>${person.fullName}</li>`)
      .join("");

    // Update previous winners list
    this.previousListEl.innerHTML = this.lastWinners
      .map((person) => `<li>${person.fullName}</li>`)
      .join("");

    // Update start button state
    this.startBtn.disabled = this.players.length === 0;
  }

  saveData() {
    localStorage.setItem("players", JSON.stringify(this.players));
    localStorage.setItem("winners", JSON.stringify(this.lastWinners));
  }

  showModal(customMessage = null) {
    this.modal.style.display = "flex";
    if (customMessage) {
      this.modalWinnerText.textContent = customMessage;
    }
  }

  closeModal() {
    this.modal.style.display = "none";
  }
}

// Initialize the app when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  new LotteryApp();
});
