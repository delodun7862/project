
  const countDownDate = new Date();
  countDownDate.setDate(countDownDate.getDate() + 10);

    function updateCountdown() {
      const currentDate = new Date();
      const distance = countDownDate  - currentDate;

      if (distance <= 0) {
        clearInterval(timerInterval);
        document.getElementById('countdown').innerHTML = 'Countdown Over!';
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById('days').innerHTML = days;
        document.getElementById('hours').innerHTML = hours;
        document.getElementById('minutes').innerHTML = minutes;
        document.getElementById('seconds').innerHTML = seconds;
      }
    }

    const timerInterval = setInterval(updateCountdown, 1000);

    const endDate = countDownDate.toLocaleString('en-US', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric', });
      document.getElementById('giveaway-info').innerHTML = `Giveaway Ends On ${endDate} at 11:30am`;