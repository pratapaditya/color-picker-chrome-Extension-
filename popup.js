$(function () {
  


        $("#picker").colorPick({
			'initialColor' : '#34495e',
			'palette': ["#34495e", "#ea6790", "#96cc02", "#f56038", "#f7a325", "#ff1a40", "#246687", "#660000", "#1a82ff"],
			'onColorSelected': function() {
				$("#colorCode").text( this.color);
				this.element.css({'backgroundColor': this.color, 'color': this.color});
			}
		});
		
		
		
		
		
		        $('.refresh').click(function(){
            $('.color').each(function(){
                var rColor = "#" + Math.random().toString(16).substr(2,6);
                $(this).css('background-color',rColor);
                $(this).children(".color-hex").text(rColor);

            });
        }).trigger('click');

        $('.color').click(function(){
            var input = $('<input>');
            var color = $(this).children(".color-hex").text();
            $('body').append(input);
            input.val(color).select();
            document.execCommand('copy');
            input.remove();
			$('.copied').css("background-color", color).fadeIn().delay(1000).fadeOut(); 
        });
		
		});
