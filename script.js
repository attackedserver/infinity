
  if ($(this).hasClass('out')) {
    window.open('https://t.me/attackedserver');
  }else
  {
  createHome();
  }
});



	$(search_form).submit(function( event ) {
	  if ( 'aboutme' === $( "input" ).val() || 'codelab' === $( "input" ).val() ||  'contact' === $( "input" ).val() || 'gethacked' === $( "input" ).val() || 'blog' === $( "input" ).val() || 'home'  === $( "input" ).val()) {

    createHome();

	  } else if ( $( "input" ).val() === "instagram" ) {
				window.open('http://instagram.com/arcticben.co.uk');
  		} else if ($( "input" ).val() === "ipconfig") {

        var binder = $('input').val();
        var terminal_div = document.getElementsByClassName('terminal');
            $('.terminal').addClass("binding");
        var theipagain = $('#ip').html();

        var ipconfig = document.createElement('p');
              $(ipconfig).text('ipconfig: ' + theipagain);
              ipconfig.setAttribute('class', 'terminal__line');
              $(ipconfig).appendTo(terminal_div);
              console.log(ipconfig.length);

      }

		var binder = $('input').val();
		var terminal_div = document.getElementsByClassName('terminal');
				$('.terminal').addClass("binding");

		var commands = document.createElement('p');
					commands.innerHTML = ('Execute: ' + binder);
					commands.setAttribute('class', 'terminal__line');
					$(commands).appendTo(terminal_div);



