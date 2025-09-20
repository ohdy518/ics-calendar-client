<script>
	import { DOMAIN, CALENDAR_ID } from '$lib/config.js';
	
	const calendarUrl = `${DOMAIN}/api/calendar/${CALENDAR_ID}`;
	const webcalUrl = calendarUrl.replace('http', 'webcal');
	
	const subscriptionLinks = {
		google: `https://calendar.google.com/calendar/render?cid=${webcalUrl}`,
		apple: webcalUrl,
		outlook: `https://outlook.live.com/calendar/0/addcalendar?url=${webcalUrl}`,
		download: calendarUrl
	};
	
	function copyToClipboard(url) {
		navigator.clipboard.writeText(url);
	}
</script>
<div class="min-h-screen flex flex-col items-center justify-center">
<div class="pre mx-9">
<h1 class="font-bold text-2xl sm:text-3xl text-pretty break-keep">영훈국제중학교 3학년 2025 캘린더</h1>
<p class="font-medium text-lg">아래에서 캘린더에 구독하세요.</p>
</div>

<div class="inter mt-4 border-2 border-slate-950 py-2 px-4 flex flex-col gap-2">
    <div id="spacer" class="w-64"></div>
    <h2 class="pre font-semibold">서비스로 구독...</h2>

    <button class="bg-blue-200 hover:bg-blue-300 rounded-lg border border-blue-300 p-1" onclick={() => window.open(subscriptionLinks.google)}>
        Google Calendar
    </button>

    <button class="bg-rose-200 hover:bg-rose-300 rounded-lg border border-rose-300 p-1" onclick={() => window.open(subscriptionLinks.apple)}>
        Apple Calendar
    </button>

    <button class="bg-sky-200 hover:bg-sky-300 rounded-lg border border-sky-300 p-1" onclick={() => window.open(subscriptionLinks.outlook)}>
        Outlook Calendar
    </button>

    <button class="bg-slate-200 hover:bg-slate-300 rounded-lg border border-slate-300 p-1 pre" onclick={() => window.open(subscriptionLinks.download)}>
        ICS 내려받기
    </button>

    <h2 class="pre font-semibold mt-4">다른 방법으로 구독...</h2>

    <button class="bg-slate-200 hover:bg-slate-300 rounded-lg border border-slate-300 p-1 pre" onclick={() => copyToClipboard(subscriptionLinks.apple)}>
        Webcal URL 복사
    </button>

    <button class="bg-slate-200 hover:bg-slate-300 rounded-lg border border-slate-300 p-1 pre" onclick={() => copyToClipboard(subscriptionLinks.download)}>
        Direct URL 복사
    </button>
</div>
</div>
