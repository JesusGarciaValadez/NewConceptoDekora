( function( $ ) {
    var conceptoDekora  = {
        common: {
            init:   function () {
                
            }
        }, 
        //  Handles the functionality of the home page
        home: function () {

            var  toggleCurtain   = function ( e ) {
                e.preventDefault();
                e.stopPropagation();
                //  Drop down the curtain
                if( $(e.currentTarget).hasClass('up') ) {
                
                    //  Change the class of the Logo Button.
                    $( "#index" ).toggleClass( "up", false );
                    $( "#index" ).toggleClass( "down", true );                   
                    
                    //  Change the state of the arrow button to down the curtain.
                    $( "#toggle_curtain" ).toggleClass( "up", false );
                    $( "#dekora_values button" ).animate({
                        backgroundPosition: "-4px -4px", 
                    }, "fast" );
                    $( "#toggle_curtain" ).toggleClass( "down", true );
                    
                    //  Change que state of the curtain complete.
                    $( "#toggle_curtain" ).parent().toggleClass( "up", false );
                    $( "#dekora_values" ).animate({
                        top: '0px', 
                    }, "fast" );
                    $( "#toggle_curtain" ).parent().toggleClass( "down", true );
    
                    //  Change que state of the menu.
                    $( "nav" ).toggleClass( "up", false );
                    $( "nav" ).animate({
                       top: '-35px',
                    }, "fast" );
                    $( "nav" ).toggleClass( "down", true );
                    
                    return;
                }

                //  Up the curtain
                if( $(e.currentTarget).hasClass('down') ) {
    
                    //  Change the class of the Logo Button.
                    $( "#index" ).toggleClass( "down", false );
                    $( "#index" ).toggleClass( "up", true );
    
                    //  Change the state of the button to up the curtain.
                    $( "#toggle_curtain" ).toggleClass( "down", false );
                    $( "#dekora_values button" ).animate({
                        backgroundPosition: "-4px -20px", 
                    }, "fast" );                    
                    $( "#toggle_curtain" ).toggleClass( "up", true );
                    
                    //  Change que state of the curtain complete.
                    $( "#toggle_curtain" ).parent().toggleClass( "down", false );
                    $( "#dekora_values" ).animate({
                        top: '-248px', 
                    }, "fast" );
                    $( "#toggle_curtain" ).parent().toggleClass( "up", true );
    
                    //  Change que state of the menu.
                    $( "nav" ).toggleClass( "down", false );
                    $( "nav" ).animate({
                        top: '-283px', 
                    }, "fast" );
                    $( "nav" ).toggleClass( "up", true );
                    
                    return;
                }
            };
            
            //  Handles the basic behavior of the top of the page.
            $("#dekora_values").delegate ( "#toggle_curtain", "click", toggleCurtain );
            $("nav ul").delegate ( "#index", "click", toggleCurtain );
    
            //  Principal Scrollable
            if( $("#backgrounds").length != 0 || 
                $("#backgrounds").length != null ) {
                $("#slider").nivoSlider();
            }
    
            //  Secondary Scrollable
            if( $(".scrollable_partners").length != 0 || 
                $(".scrollable_partners").length != null ) {
                $("#scrollable_partners").scrollable({
                    disabledClass:  'disabled', 
                    easing:         'swing', 
                    items:          '.items_partners', 
                    keyboard:       false, 
                    circular:       true, 
                    next:           '.next', 
                    prev:           '.prev', 
                    speed:          400, 
                    vertical:       false
                }).autoscroll({
                    steps:      1, 
                    interval:   5000, 
                    autoplay:   true, 
                    autopause:  true
                });
            }
        }
    };

    $("document").ready( function ( e ) {

        conceptoDekora.common.init();

		var absolutePath      = self.location.href;
		var lastSlashPosition = absolutePath.lastIndexOf( "/" ); 
		var relativePath      = absolutePath.substring( lastSlashPosition + "/".length , absolutePath.length );
		var waste             = relativePath.substring( relativePath.lastIndexOf( '.' ), relativePath.length );
		relativePath          = relativePath.replace( waste, '' );

		switch ( relativePath ) {
			case "index_raw":
			default:
			     conceptoDekora.home();		
			     break;
        }
    });
} )( jQuery, null );