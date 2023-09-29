function findCost()
{
   var major = document.getElementById ( "major" );
   var starters = document.getElementById ( "starters" );
   var soft = document.getElementById ( "soft" );
   var selecteditems = "Item\t\t\t Price\n ...\n";
   var total = 0;
   for ( var i = 0; i < major.options.length; i++ )
   {
       var option = major.options [ i ] ;
       if ( option.selected == true )
       {
        var price = parseInt ( option.value );
        total = total + price;
        selecteditems = selecteditems + option.text + "\t\t" + price + "\n";
       }
   }
   for ( var i = 0; i < starters.options.length; i++ )
   {
       var option = starters.options [ i ];
       if ( option.selected == true )
       {
       var price = parseInt ( option.value );
       total = total + price;
       selecteditems = selecteditems + option.text + "\t\t" + price + "\n";
       }
   }
   var s = soft.selectedIndex;
   if ( s != -1)
   {
       var option = soft.options [ soft.selectedIndex ] .text;
       var price = parseInt ( soft.options [ soft.selectedIndex ] .value );
       total = total + price;
       selecteditems = selecteditems + option + "\t\t" + price + "\n";
   }
   selecteditems = selecteditems + "\n\nTotal Cost\t\t" + total;
   document.getElementById ( "ordereditems" ) .value = selecteditems;
}