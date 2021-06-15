###
D-day Counter

```
<div class="clock"></div>

<script>
    CountDownDay('07/01/2021 00:00 AM', '.clock');

    function CountDownDay (date, obj){
        const clock = document.querySelector(obj),
            end = new Date(date),
            now = new Date();

        const _second = 1000,
            _minute = _second * 60,
            _hour = _minute * 60,
            _day = _hour * 24;

        const distance = end - now;

        function showCounting(){
            var days = Math.floor(distance / _day);
            clock.innerHTML = days + 1;
        }
        showCounting();
    }
</script>
```
