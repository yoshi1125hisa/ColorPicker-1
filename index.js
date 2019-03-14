$(function () {
  var background = document.body;
  var hex_h1 = document.getElementById('hex');
  var revers = document.getElementById('revers');
  var hoshoku = document.getElementById('hoshoku');
  var reversh1 = document.getElementById('revers-h1');
  var hoshokuh1 = document.getElementById('hoshoku-h1');
  var textfield = document.getElementById('textfield');
  var button = document.getElementById('button');

  var red = 255
  var green = 255
  var blue = 255

  button.onclick = () => {
    console.log(textfield.value.split(2));

    rgbchange();
  }

  $('#slider-1').slider({
    min: 0, max: 255, step: 1, value: 255,

    // slider の変更を box に反映
    slide: function (e, ui) {
      $('#box-1').val(ui.value);

      rgbchange();

    },

    create: function (e, ui) {
      $('#box-1').val($('#slider-1').slider('option', 'value'));

      // box の変更を slider に反映
      $('#box-1').change(function () {
        $('#slider-1').slider('value', $('#box-1').val());
        rgbchange();
      });

      // spinner の初期設定
      $('#box-1').spinner({
        min: $('#slider-1').slider('option', 'min'),
        max: $('#slider-1').slider('option', 'max'),
        step: $('#slider-1').slider('option', 'step'),

        // spinner の変更を slider に反映
        spin: function (e, ui) {
          $('#slider-1').slider('value', ui.value);
          rgbchange();
        }
      });
    }
  });

  $('#slider-2').slider({
    min: 0, max: 255, step: 1, value: 255,

    // slider の変更を box に反映
    slide: function (e, ui) {
      $('#box-2').val(ui.value);
      rgbchange();
    },

    create: function (e, ui) {
      $('#box-2').val($('#slider-2').slider('option', 'value'));

      // box の変更を slider に反映
      $('#box-2').change(function () {
        $('#slider-2').slider('value', $('#box-2').val());
        rgbchange();
      });

      // spinner の初期設定
      $('#box-2').spinner({
        min: $('#slider-2').slider('option', 'min'),
        max: $('#slider-2').slider('option', 'max'),
        step: $('#slider-2').slider('option', 'step'),

        // spinner の変更を slider に反映
        spin: function (e, ui) {
          $('#slider-2').slider('value', ui.value);
          rgbchange();
        }
      });
    }
  });

  $('#slider-3').slider({
    min: 0, max: 255, step: 1, value: 255,

    // slider の変更を box に反映
    slide: function (e, ui) {
      $('#box-3').val(ui.value);
      rgbchange();
    },

    create: function (e, ui) {
      $('#box-3').val($('#slider-3').slider('option', 'value'));

      // box の変更を slider に反映
      $('#box-3').change(function () {
        $('#slider-3').slider('value', $('#box-3').val());
        rgbchange();
      });

      // spinner の初期設定
      $('#box-3').spinner({
        min: $('#slider-3').slider('option', 'min'),
        max: $('#slider-3').slider('option', 'max'),
        step: $('#slider-3').slider('option', 'step'),

        // spinner の変更を slider に反映
        spin: function (e, ui) {
          $('#slider-3').slider('value', ui.value);
          rgbchange();
        }
      });
    }
  });


  function rgbchange() {
    red = $('#slider-1').slider('value');
    green = $('#slider-2').slider('value')
    blue = $('#slider-3').slider('value');

    if (red + green + blue <= 382) {
      hex_h1.style.color = '#FFF'
      reversh1.style.color = '#000'
      hoshokuh1.style.color = '#FFF'
    } else {
      hex_h1.style.color = '#000'
      reversh1.style.color = '#FFF'
      hoshokuh1.style.color = '#000'
    }


    let hex = tohex(red, green, blue);
    let reversHex = tohex(255 - red, 255 - green, 255 - blue);
    let aaa = Math.max(red, green, blue) + Math.min(red, green, blue);
    let hoshokuHex = tohex(aaa - red, aaa - green, aaa - blue);

    background.style.backgroundColor = `#${hex}`;
    hex_h1.innerText = "#" + hex;
    revers.style.backgroundColor = `#${reversHex}`;
    reversh1.innerText = "#" + reversHex;
    hoshoku.style.backgroundColor = `#${hoshokuHex}`;
    hoshokuh1.innerText = "#" + hoshokuHex;
  }

  function tohex(r, g, b) {
    var rr = r.toString(16).toUpperCase();
    var gg = g.toString(16).toUpperCase();
    var bb = b.toString(16).toUpperCase();

    if (rr.length == 1) {
      rr = ('00' + rr).slice(-2);
    }
    if (gg.length == 1) {
      gg = ('00' + gg).slice(-2);
    }
    if (bb.length == 1) {
      bb = ('00' + bb).slice(-2);
    }
    return rr + gg + bb
  }
});
