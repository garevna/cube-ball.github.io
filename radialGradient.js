'use strict'

/*export*/ function getWebkitRadialGradient ( objectRadius, mainColorIndexes, lightFrom ) {
     var lightSource = {
         center_center: [ '50%',  '50%', '0', '50%',  '50%' ],
         top_center:    [ '50%',  '10%', '0', '50%',   '0%' ],
         top_right:     [ '80%',  '25%', '0', '80%',  '25%' ],
         top_left:      [ '25%',  '25%', '0', '25%',  '25%' ],
         bottom_center: [ '50%',  '80%', '0', '50%',  '90%' ],
         bottom_right:  [ '80%',  '75%', '0', '90%',  '75%' ],
         bottom_left:   [ '25%',  '75%', '0', '25%',  '80%' ]
     }
     if ( objectRadius <= 0 ) return false
     mainColorIndexes = Array.isArray ( mainColorIndexes ) ?
                        mainColorIndexes : [ mainColorIndexes ]
     if (
         mainColorIndexes.some (
            item => item > 2 || item < 0
         )
     ) return false
     var clrNorm = [ 0, 0, 0 ];
     var clrDark = [ 0, 0, 0 ];
     for ( var item of mainColorIndexes ) {
         clrNorm [ item ] = 'f';
         clrDark [ item ] = '5';
     }
     var normalColor = '#' + clrNorm[0] + clrNorm[1] + clrNorm[2];
     var darkColor = '#' + clrDark[0] + clrDark[1] + clrDark[2];
     var dir = lightSource [ lightFrom ];
     var grd = '-webkit-gradient( radial, ' + dir[0] + ' ' + dir[1] + ', ' + dir[2] + ', ' + dir[3] + ' ' + dir[4] + ', ';
     grd += objectRadius + ', from(#fff), color-stop(0.2, ' + normalColor +  '), to(' + darkColor + '))';
     return grd;
}
// ==========================================================================================================================
//                                                  for IE
// ==========================================================================================================================
/*export*/ function getRadialGradient ( mainColorIndexes, lightFrom ) {
     var lightSource = {
         center_center: [ '50%',  '50%' ],
         top_center:    [ '50%',  '10%' ],
         top_right:     [ '75%',  '25%' ],
         top_left:      [ '25%',  '25%' ],
         bottom_center: [ '50%',  '80%' ],
         bottom_right:  [ '75%',  '75%' ],
         bottom_left:   [ '25%',  '75%' ]
     }
     mainColorIndexes = Array.isArray ( mainColorIndexes ) ?
                        mainColorIndexes : [ mainColorIndexes ]
     if (
        mainColorIndexes.some (
            item => item > 2 || item < 0
        )
     ) return false
     var clrNorm = [ 0, 0, 0 ];
     var clrDark = [ 0, 0, 0 ];
     for ( var item of mainColorIndexes ) {
         clrNorm [ item ] = '255';
         clrDark [ item ] = '3';
     }
     var normalColor = 'rgba(' + clrNorm[0] + ',' + clrNorm[1] + ',' + clrNorm[2] + ', 0.7)';
     var darkColor = '#' + clrDark[0] + clrDark[1] + clrDark[2];
     var dir = lightSource [ lightFrom ];
     var grd = 'radial-gradient( circle farthest-corner at ';
     grd += dir[0] + ' ' + dir[1] + ', #fff 0%, ' + normalColor;
     grd += ' 40%, ' + darkColor + ' 80% )';
     return grd;
}
