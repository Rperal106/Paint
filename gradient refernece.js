// draw the shape that contains the gradient
   var myBmp = this.game.add.bitmapData(400, 50);
   var myGrd = myBmp.context.createLinearGradient(0, 0, 0, 30);
   myGrd.addColorStop(0, '#FFFFFF');
   myGrd.addColorStop(1, '#C50000');
   myBmp.context.fillStyle = myGrd;
   myBmp.context.fillRect(0, 0, 140, 30);
   var grandientSpr = this.game.add.sprite(330, 50, myBmp);

   var myMask = this.game.add.graphics(0, 0);
   myMask.beginFill(0x000000);
   myMask.drawRoundedRect(330, 50, 140, 30, 10); // draw a rounded rect mask
   myMask.endFill();

   grandientSpr.mask = myMask; // apply the mask
