export default function getMask() {
  [].forEach.call(document.querySelectorAll('input[type="tel"]'), function (input) {
    let keyCode;
    function mask(evt) {
      if (evt.keyCode) {
        keyCode = evt.keyCode;
      }
      let pos = evt.currentTarget.selectionStart;
      if (pos < 3) {
        evt.currentTarget.style.pointerEvents = 'none';
        evt.preventDefault();
      }
      let matrix = '+7 (___) ___ ____';
      let i = 0;
      let def = matrix.replace(/\D/g, '');
      let val = evt.currentTarget.value.replace(/\D/g, '');
      let newValue = matrix.replace(/[_\d]/g, function (a) {
        return i < val.length ? val.charAt(i++) || def.charAt(i) : a;
      });
      i = newValue.indexOf('_');
      if (i !== -1) {
        if (i < 5) {
          i = 3;
        }
        newValue = newValue.slice(0, i);
      }
      let reg = matrix.substr(0, evt.currentTarget.value.length).replace(/_+/g,
        function (a) {
          return '\\d{1,' + a.length + '}';
        }).replace(/[+()]/g, '\\$&');
      reg = new RegExp('^' + reg + '$');
      if (!reg.test(evt.currentTarget.value) || evt.currentTarget.value.length < 5 || keyCode > 47 && keyCode < 58) {
        evt.currentTarget.value = newValue;
      }
      if (evt.type === 'blur' && evt.currentTarget.value.length < 5) {

        evt.currentTarget.value = '';
      }
    }

    input.addEventListener('input', mask, false);
    input.addEventListener('focus', mask, false);
    input.addEventListener('blur', mask, false);
    input.addEventListener('keydown', mask, false);

  });

}