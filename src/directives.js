import Vue from "vue";
import {
	PAYMENT_STATUS_PAID,
	PAYMENT_STATUS_UNPAID,
	PAYMENT_STATUS_PARTIAL,
	PAYMENT_STATUS_STR,
	SALE_COMPLETED,
	SALE_PENDING,
	SALE_ORDERED,
	SALE_STATUS_STR,
	PURCHASE_RECEIVED,
	PURCHASE_PENDING,
	PURCHASE_ORDERED,
	PURCHASE_STATUS_STR,
	PURCHASE_RETURN_COMPLETED,
	PURCHASE_RETURN_PENDING,
	PURCHASE_RETURN_STATUS_STR,
	SALE_RETURN_RECEIVED,
	SALE_RETURN_PENDING,
	SALE_RETURN_STATUS_STR,
	QUOTATION_SENT,
	QUOTATION_PENDING,
	QUOTATION_STATUS_STR,
	ADJUSTMENT_APPROVED,
	ADJUSTMENT_NOT_APPROVED,
	ADJUSTMENT_STATUS_STR,
	TRANSFER_COMPLETED,
	TRANSFER_PENDING,
	TRANSFER_SENT,
	TRANSFER_STATUS_STR
} from "@/helpers/constants";

Vue.directive("payment-status", function (el, binding) {
	let v = binding.value;

	let variant = () => {
		switch (v) {
			case PAYMENT_STATUS_PAID:
				return "success";
			case PAYMENT_STATUS_UNPAID:
				return "danger";
			case PAYMENT_STATUS_PARTIAL:
				return "orange";
			default:
				return "info";
		}
	};

	let badge = `<span class='badge badge-outline-${variant()}'>${PAYMENT_STATUS_STR[v]}</span>`;

	el.innerHTML = badge;
});

Vue.directive("purchase-status", function (el, binding) {
	let v = binding.value;

	let variant = () => {
		switch (v) {
			case PURCHASE_RECEIVED:
				return "success";
			case PURCHASE_PENDING:
				return "danger";
			case PURCHASE_ORDERED:
				return "orange";
			default:
				return "info";
		}
	};

	let badge = `<span class='badge badge-outline-${variant()}'>${PURCHASE_STATUS_STR[v]}</span>`;

	el.innerHTML = badge;
});

Vue.directive("purchase-return-status", function (el, binding) {
	let v = binding.value;

	let variant = () => {
		switch (v) {
			case PURCHASE_RETURN_COMPLETED:
				return "success";
			case PURCHASE_RETURN_PENDING:
				return "danger";
			default:
				return "info";
		}
	};

	let badge = `<span class='badge badge-outline-${variant()}'>${PURCHASE_RETURN_STATUS_STR[v]}</span>`;

	el.innerHTML = badge;
});

Vue.directive("sale-status", function (el, binding) {
	let v = binding.value;

	let variant = () => {
		switch (v) {
			case SALE_COMPLETED:
				return "success";
			case SALE_PENDING:
				return "danger";
			case SALE_ORDERED:
				return "orange";
			default:
				return "info";
		}
	};

	let badge = `<span class='badge badge-outline-${variant()}'>${SALE_STATUS_STR[v]}</span>`;

	el.innerHTML = badge;
});

Vue.directive("sale-return-status", function (el, binding) {
	let v = binding.value;

	let variant = () => {
		switch (v) {
			case SALE_RETURN_RECEIVED:
				return "success";
			case SALE_RETURN_PENDING:
				return "danger";
			default:
				return "info";
		}
	};

	let badge = `<span class='badge badge-outline-${variant()}'>${SALE_RETURN_STATUS_STR[v]}</span>`;

	el.innerHTML = badge;
});

Vue.directive("quotation-status", function (el, binding) {
	let v = binding.value;

	let variant = () => {
		switch (v) {
			case QUOTATION_SENT:
				return "success";
			case QUOTATION_PENDING:
				return "danger";
			default:
				return "info";
		}
	};

	let badge = `<span class='badge badge-outline-${variant()}'>${QUOTATION_STATUS_STR[v]}</span>`;

	el.innerHTML = badge;
});

Vue.directive("adjustment-status", function (el, binding) {
	let v = binding.value;

	let variant = () => {
		switch (v) {
			case ADJUSTMENT_APPROVED:
				return "success";
			case ADJUSTMENT_NOT_APPROVED:
				return "danger";
			default:
				return "info";
		}
	};

	let badge = `<span class='badge badge-outline-${variant()}'>${ADJUSTMENT_STATUS_STR[v]}</span>`;

	el.innerHTML = badge;
});

Vue.directive("transfer-status", function (el, binding) {
	let v = binding.value;

	let variant = () => {
		switch (v) {
			case TRANSFER_COMPLETED:
				return "success";
			case TRANSFER_PENDING:
				return "danger";
			case TRANSFER_SENT:
				return "orange";
			default:
				return "info";
		}
	};

	let badge = `<span class='badge badge-outline-${variant()}'>${TRANSFER_STATUS_STR[v]}</span>`;

	el.innerHTML = badge;
});
