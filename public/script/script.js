"use strict";
const notifications = (() => {
	let counter = 0;
	const notificationsCenter = document.getElementById("notifications-counter");
	const rows = document.querySelectorAll(".row");
	const markAll = document.querySelector("#mark-all-read");
	const getNotificationIf = document.querySelectorAll(".text-content");

	for (const element of rows) {
		const row = element;
		const getNotificationIf = row.querySelector(".text-content");
		if (!row.classList.contains("to-read")) {
			getNotificationIf.style.setProperty("--toggle-display", "none");
		} else {
			counter += 1;
		}
		const notificationRead = () => {
			if (row.classList.contains("to-read")) {
				console.log(getNotificationIf);
				row.classList.remove("to-read");
				getNotificationIf.style.setProperty("--toggle-display", "none");
				counter -= 1;
				notificationsCenter.innerText = counter;
			}
		};
		row.addEventListener("click", notificationRead);
		notificationsCenter.innerText = counter;
	}

	const markAllAsRead = () => {
		rows.forEach((el) => {
			el.classList.remove("to-read");
		});
		getNotificationIf.forEach((el) => {
			el.style.setProperty("--toggle-display", "none");
		});
		counter = 0;
		notificationsCenter.innerText = counter;
	};

	markAll.addEventListener("click", markAllAsRead);
})();
