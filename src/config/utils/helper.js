const helper = {
  getFormattedDatetime: (datetime) => {
    return moment.utc(datetime).local().format('MMM Do, YYYY, h:mm a');
  },
  getTimeFormatted: (time) => {
    let jam = Math.round(time / 60);
    let min = time % 60;

    return jam + "j " + min + "m"
  },
  getPriceFormatted: (price) => {
    let number_string = price.toString(),
      sisa = number_string.length % 3,
      rupiah = number_string.substr(0, sisa),
      ribuan = number_string.substr(sisa).match(/\d{3}/g);

    if (ribuan) {
      separator = sisa ? '.' : '';
      rupiah += separator + ribuan.join('.');
    };

    return rupiah;
  }
}

export default helper;