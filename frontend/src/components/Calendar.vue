<script setup>
import { ref, onMounted } from "vue";
const selectedDate = ref("");
const nbrTrack = ref(1);
const date = new Date();
const days = ref([]);
const isActive = ref(false);
const thisDate = new Date().toISOString().slice(0, 10);
const currYear = ref(date.getFullYear());
const currMonth = ref(date.getMonth());
const thisMonth = ref(date.getMonth());
const thisYear = ref(date.getFullYear());
const today = date.getDate();
const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];
const price = ref(85);
let currentDate = `${months[currMonth.value]} ${currYear.value}`;

function renderCalendar() {
    let first_day = new Date(currYear.value, currMonth.value, 1).getDay() - 1;
    if (first_day === -1) {
        first_day = 6; // Sunday
    }
    let lastDateOfMonth = new Date(
        currYear.value,
        currMonth.value + 1,
        0
    ).getDate();
    let lastDateofLastMonth = new Date(
        currYear.value,
        currMonth.value,
        0
    ).getDate();
    let lastDayOfMonth = new Date(
        currYear.value,
        currMonth.value,
        lastDateOfMonth
    ).getDay();
    for (let i = first_day; i > 0; i--) {
        days.value.push({
            day: lastDateofLastMonth - i + 1,
            date: new Date(
                currYear.value,
                currMonth.value - 1,
                lastDateofLastMonth - i + 2
            )
                .toISOString()
                .slice(0, 10),
            isWeekend: IsWeekend(
                new Date(
                    currYear.value,
                    currMonth.value - 1,
                    lastDateofLastMonth - i + 2
                )
            ),
            isInCurrMonth: "prev",
            isToday: false,
            isTaken: false,
        });
    }
    for (let i = 1; i <= lastDateOfMonth; i++) {
        if (
            i == today &&
            currMonth.value == thisMonth.value &&
            currYear.value == thisYear.value
        ) {
            days.value.push({
                day: i,
                isInCurrMonth: "curr",
                date: new Date(currYear.value, currMonth.value, i + 1)
                    .toISOString()
                    .slice(0, 10),
                isWeekend: IsWeekend(
                    new Date(currYear.value, currMonth.value, i + 1)
                ),
                isToday: true,
                isTaken: false,
            });
            continue;
        }
        days.value.push({
            day: i,
            isInCurrMonth: "curr",
            date: new Date(currYear.value, currMonth.value, i + 1)
                .toISOString()
                .slice(0, 10),
            isWeekend: IsWeekend(
                new Date(currYear.value, currMonth.value, i + 1)
            ),
            isToday: false,
            isTaken: false,
        });
    }
    for (let i = lastDayOfMonth; i < 7; i++) {
        days.value.push({
            day: i - lastDayOfMonth + 1,
            date: new Date(
                currYear.value,
                currMonth.value + 1,
                i - lastDayOfMonth + 2
            )
                .toISOString()
                .slice(0, 10),
            isWeekend: IsWeekend(
                new Date(
                    currYear.value,
                    currMonth.value + 1,
                    i - lastDayOfMonth + 2
                )
            ),
            isInCurrMonth: "next",
            isToday: false,
            isTaken: false,
        });
    }
    return days.value;
}
function NextMonth() {
    if (currMonth.value > 0) {
        currMonth.value--;
        currentDate = `${months[currMonth.value]} ${currYear.value}`;
    } else {
        currMonth.value = 11;
        currYear.value--;
        currentDate = `${months[currMonth.value]} ${currYear.value}`;
    }
    days.value = [];
    days.value = renderCalendar();
    getDates();
}

function UpdateDate(date) {
    days.value.forEach((day) => {
        if (day.date == date) {
            day.isTaken = true;
        }
    });
}

onMounted(() => {
    days.value = renderCalendar();
    getDates();
});

function PreviousMonth() {
    if (currMonth.value < 11) {
        currMonth.value++;
        currentDate = `${months[currMonth.value]} ${currYear.value}`;
    } else {
        currMonth.value = 0;
        currYear.value++;
        currentDate = `${months[currMonth.value]} ${currYear.value}`;
    }
    days.value = [];
    days.value = renderCalendar();
    getDates();
}
const SelectDate = (day, month, year, isInCurrMonth) => {
    if (isInCurrMonth == "prev")
        selectedDate.value = new Date(year, month - 1, day + 1)
            .toISOString()
            .slice(0, 10);
    else if (isInCurrMonth == "curr")
        selectedDate.value = new Date(year, month, day + 1)
            .toISOString()
            .slice(0, 10);
    else if (isInCurrMonth == "next")
        selectedDate.value = new Date(year, month + 1, day + 1)
            .toISOString()
            .slice(0, 10);
};
const takeDate = (e) => {
    console.log(e.target.nbrTracks.value);
    $fetch("http://localhost:3001/api/agenda/appointments", {
        method: "POST",
        body: JSON.stringify({
            date: selectedDate.value,
            nbrTrack: e.target.nbrTracks.value,
            description: e.target.description.value,
            accessToken: localStorage.getItem("accessToken"),
        }),
    }).then((res) => {
        if (res.status == "success") {
            alert("Appointment taken");
            UpdateDate(selectedDate.value);
        }
    });
};
const getDates = () => {
    $fetch("http://localhost:3001/api/agenda/appointments/all", {
        method: "GET",
    }).then((res) => {
        if (res.status == "success") {
            for (let day of res.data) {
                UpdateDate(day.date);
            }
        }
    });
};
const IsWeekend = (date) => {
    let day = date.getDay();
    if (day == 0 || day == 1) return true;
    else return false;
};
</script>

<template>
    <div class="flex items-center justify-center gap-8 py-8 px-4 ml-5">
        <div class="max-w-2xl w-full shadow-lg">
            <div class="md:p-6 p-4 dark:bg-gray-800 bg-white rounded-t">
                <div class="px-4 py-2 mt-2 flex items-center justify-been">
                    <span
                        tabindex="0"
                        class="focus:outline-none text-4xl font-bold dark:text-gray-100 text-gray-800"
                        >{{ currentDate }}</span
                    >
                    <div class="flex items-center">
                        <button
                            aria-label="calendar backward"
                            class="focus:text-gray-400 hover:text-gray-400 text-gray-800 dark:text-gray-100"
                            @click="NextMonth"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="icon icon-tabler icon-tabler-chevron-left"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                fill="none"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            >
                                <path
                                    stroke="none"
                                    d="M0 0h24v24H0z"
                                    fill="none"
                                />
                                <polyline points="15 6 9 12 15 18" />
                            </svg>
                        </button>
                        <button
                            aria-label="calendar forward"
                            class="focus:text-gray-400 hover:text-gray-400 ml-3 text-gray-800 dark:text-gray-100"
                            @click="PreviousMonth"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="icon icon-tabler icon-tabler-chevron-right"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                fill="none"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            >
                                <path
                                    stroke="none"
                                    d="M0 0h24v24H0z"
                                    fill="none"
                                />
                                <polyline points="9 6 15 12 9 18" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div class="pt-10 pb-6 text-2xl overflow-x-auto">
                    <table class="w-full">
                        <tr class="grid grid-cols-7">
                            <th>
                                <div class="w-full flex justify-center">
                                    <p
                                        class="font-medium text-center text-gray-800 dark:text-gray-100"
                                    >
                                        Mo
                                    </p>
                                </div>
                            </th>
                            <th>
                                <div class="w-full flex justify-center">
                                    <p
                                        class="font-medium text-center text-gray-800 dark:text-gray-100"
                                    >
                                        Tu
                                    </p>
                                </div>
                            </th>
                            <th>
                                <div class="w-full flex justify-center">
                                    <p
                                        class="font-medium text-center text-gray-800 dark:text-gray-100"
                                    >
                                        We
                                    </p>
                                </div>
                            </th>
                            <th>
                                <div class="w-full flex justify-center">
                                    <p
                                        class="font-medium text-center text-gray-800 dark:text-gray-100"
                                    >
                                        Th
                                    </p>
                                </div>
                            </th>
                            <th>
                                <div class="w-full flex justify-center">
                                    <p
                                        class="font-medium text-center text-gray-800 dark:text-gray-100"
                                    >
                                        Fr
                                    </p>
                                </div>
                            </th>
                            <th>
                                <div class="w-full flex justify-center">
                                    <p
                                        class="font-medium text-center text-gray-800 dark:text-gray-100"
                                    >
                                        Sa
                                    </p>
                                </div>
                            </th>
                            <th>
                                <div class="w-full flex justify-center">
                                    <p
                                        class="font-medium text-center text-gray-800 dark:text-gray-100"
                                    >
                                        Su
                                    </p>
                                </div>
                            </th>
                        </tr>
                    </table>
                </div>
                <div>
                    <div>
                        <ul class="px-2 grid grid-cols-7 gap-4">
                            <li
                                v-for="day in days"
                                class="text-xl font-medium text-center text-gray-800 dark:text-gray-100 py-6"
                                :class="{
                                    inactive:
                                        day.isInCurrMonth == 'prev' ||
                                        day.isInCurrMonth == 'next' ||
                                        day.isTaken ||
                                        day.date < thisDate ||
                                        day.isWeekend,
                                    'hover:rounded-full hover:bg-slate-900 cursor-pointer':
                                        day.isInCurrMonth == 'curr' &&
                                        !day.isTaken &&
                                        day.date >= thisDate &&
                                        !day.isWeekend,
                                    'bg-blue-500': day.isToday,
                                    'rounded-full': day.isToday,
                                }"
                                @click="
                                    if (
                                        day.isInCurrMonth == 'curr' &&
                                        !day.isTaken &&
                                        day.date >= thisDate &&
                                        !day.isWeekend
                                    ) {
                                        isActive = true;
                                        SelectDate(
                                            day.day,
                                            currMonth,
                                            currYear,
                                            day.isInCurrMonth
                                        );
                                    }
                                "
                            >
                                {{ day.day }}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div
            v-if="isActive"
            class="max-w-sm w-full shadow-lg text-gray-800 dark:text-gray-100"
        >
            <div class="md:p-6 p-4 dark:bg-gray-800 bg-white rounded-t">
                <form @submit.prevent="takeDate">
                    <p class="text-3xl bg-slate-600 text-center rounded-lg">
                        {{ selectedDate }}
                    </p>
                    <div class="flex-row flex align-center gap-5">
                        <div class="flex flex-col my-2 mb-6">
                            <label for="nbrTrack">Number of tracks</label>
                            <input
                                type="number"
                                name="nbrTracks"
                                max="3"
                                min="1"
                                required
                                v-model="nbrTrack"
                                class="bg-slate-100 w-32 py-2 px-4 text-gray-700 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500"
                            />
                        </div>
                        <p class="text-2xl mt-2">{{ price * nbrTrack }} €</p>
                    </div>
                    <textarea
                        name="description"
                        id=""
                        cols="30"
                        rows="6"
                        placeholder="Add a comment"
                        class="bg-white rounded-md shadow-sm border border-gray-300 p-2 mb-4 w-full text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500"
                    ></textarea>
                    <button type="submit" class="bg-blue-500 p-2 rounded-md">
                        Confirm
                    </button>
                </form>
            </div>
        </div>
    </div>
</template>

<style scoped>
.inactive {
    opacity: 0.5;
}
</style>
