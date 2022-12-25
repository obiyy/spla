function MkCard()
{
	$("<a href='#popup' data-rel='dialog'></a>").click();
  var aName = $('._js_name').val();
  var aSeibetu = $('._js_seibetu:checked').val()
  var aRank = $('._js_rank').val();
  var aUdemaeArea = $('._js_udemae_area option:selected').val();
  var aUdemaeHoko = $('._js_udemae_hoko option:selected').val();
  var aUdemaeYagura = $('._js_udemae_yagura option:selected').val();
  var aUdemaeAsari = $('._js_udemae_asari option:selected').val();
  var aTeam = $('._js_team').val();
  var aBuki = $('._js_buki').val();
  var aTime = $('._js_time').val();
  var aFriendCode = $('._js_friend_code').val();
  var aTalk = $('._js_talk').val();
  var aHitokoto = $('._js_hitokoto').val();
  var aCardImg = $('._js_card_img:checked').val();

    var img = new Image();
	img.src = "https://obiyy-spla.netlify.app/"+aCardImg;
	var cvs = document.getElementById('srcImg');
    cvs.width = $('._js_none_img').width();
    cvs.height = $('._js_none_img').height();
	var ctxt = cvs.getContext('2d');
    var aScale = cvs.width / img.width;

    var aNewCardFlg = (aCardImg != 'card.jpg');
    if ( aNewCardFlg )
    {
        var img2 = new Image();
        img2.src = "https://obiyy-spla.netlify.app/"+aCardImg;
        var ctxt2 = cvs.getContext('2d');
        aScale2 = aScale;
        aScale = aScale * 0.74;
        ctxt2.setTransform(aScale2, 0, 0, aScale2*0.9, 0, 0);
        ctxt2.drawImage(img2, 0, 0);
    }

  img.onload = function() {
    
    if ( aNewCardFlg )
    {
        ctxt.setTransform(aScale, 0, 0, aScale*0.95, 0, 0);
    }
    else
    {
        ctxt.setTransform(aScale, 0, 0, aScale, 0, 0);
        ctxt.drawImage(img, 0, 0);
    }
    ctxt.beginPath();

    // 文字列スタート位置
    var aTitleX = 55;
    var aStrX = 70;
    var aStrY = 115;
    // 枠スタート位置
    var aWakuX = 50;
    var aWakuY = 80;

    // タイトル
    ctxt.font= 'bold 60px Century Gothic';
    ctxt.strokeStyle = '#00A3D9';
    ctxt.lineWidth = 6;
    ctxt.lineJoin = 'round';
    ctxt.fillStyle = '#fff';
    ctxt.fillText('スプラ２自己紹介カード',150,60);

    // 名前、性別
    drawRect({ ctx:ctxt, x:aWakuX, y:aWakuY, width:900, height:130, radius: 20, color:"rgba(255, 255, 255, 0.9)"});
    ctxt.font = "30px 'Monotype Corsiva'";
    ctxt.fillStyle = '#000';
    ctxt.fillText('ナマエ',aTitleX,aStrY);
    ctxt.font = "60px 'Monotype Corsiva'";
    if ( aSeibetu )
    {
      aName = aName + ' ('+aSeibetu+')';
    }
    aStrX += 0; aStrY += 60;
    ctxt.fillText(aName,aStrX,aStrY);
    
    // ランク
    aWakuX += 0; aWakuY += 180;
    drawRect({ ctx:ctxt, x:aWakuX, y:aWakuY, width:250, height:130, radius: 20, color:"rgba(255, 255, 255, 0.8)"});
    ctxt.font = "30px 'Monotype Corsiva'";
    aStrX += 0; aStrY += 125;
    ctxt.fillText('ランク',aTitleX,aStrY);

    ctxt.font = "80px 'Monotype Corsiva'";
    var aRankX = aStrX+20; aStrY += 75;
    ctxt.fillText(aRank,aRankX,aStrY);

    // ウデマエ
    aWakuX += 290; aWakuY += 0;
    drawRect({ ctx:ctxt, x:aWakuX, y:aWakuY, width:600, height:130, radius: 20, color:"rgba(255, 255, 255, 0.8)"});
    ctxt.font = "30px 'Monotype Corsiva'";
    var aUdemaeX = aTitleX + 295; var aUdemaeY = aStrY-75;
    ctxt.fillText('エリア',aUdemaeX+30,aUdemaeY);
    ctxt.fillText('ホコ',aUdemaeX+180,aUdemaeY);
    ctxt.fillText('ヤグラ',aUdemaeX+320,aUdemaeY);
    ctxt.fillText('アサリ',aUdemaeX+470,aUdemaeY);

    ctxt.font = "70px 'Monotype Corsiva'";
    aUdemaeStrX = aStrX;
    ctxt.fillText(aUdemaeArea,aUdemaeStrX+300, aUdemaeY+70);
    ctxt.fillText(aUdemaeHoko,aUdemaeStrX+450, aUdemaeY+70);
    ctxt.fillText(aUdemaeYagura,aUdemaeStrX+600, aUdemaeY+70);
    ctxt.fillText(aUdemaeAsari,aUdemaeStrX+760, aUdemaeY+70);

    // チーム
    aWakuX -= 290; aWakuY += 180;
    drawRect({ ctx:ctxt, x:aWakuX, y:aWakuY, width:425, height:130, radius: 20, color:"rgba(255, 255, 255, 0.8)"});
    ctxt.font = "30px 'Monotype Corsiva'";
    aStrX += 0; aStrY += 105;
    ctxt.fillText('チーム',aTitleX,aStrY);

    ctxt.font = "40px 'Monotype Corsiva'";
    aStrX += 0; aStrY += 45;
    ctxt.fillText(aTeam,aStrX,aStrY);

    // 時間帯
    aWakuX += 455; aWakuY += 0;
    drawRect({ ctx:ctxt, x:aWakuX, y:aWakuY, width:425, height:130, radius: 20, color:"rgba(255, 255, 255, 0.8)"});
    ctxt.font = "30px 'Monotype Corsiva'";
    aStrX += 455; aStrY -= 45;
    ctxt.fillText('ジカンタイ',aTitleX+455,aStrY);

    ctxt.font = "35px 'Monotype Corsiva'";
    aStrX += 0; aStrY += 45;
    var aTimeList = MkText( ctxt, aTime, 400 );
    var aTmpStrY = aStrY;
    for( var aCnt = 0; aCnt < aTimeList.length; aCnt++)
    {
        ctxt.fillText( aTimeList[ aCnt ], aStrX, aTmpStrY );
        if ( aCnt+1 < aTimeList.length )
        {
          aTmpStrY += 40;
        }
    }

    // フレコ
    aWakuX -= 455; aWakuY += 180;
    drawRect({ ctx:ctxt, x:aWakuX, y:aWakuY, width:425, height:130, radius: 20, color:"rgba(255, 255, 255, 0.8)"});
    ctxt.font = "30px 'Monotype Corsiva'";
    aStrX -= 455; aStrY += 135;
    ctxt.fillText('フレコ',aTitleX,aStrY);

    ctxt.font = "45px 'Monotype Corsiva'";
    aStrX += 0; aStrY += 45;
    ctxt.fillText(aFriendCode,aStrX,aStrY);

    // ツウワ
    aWakuX += 455; aWakuY += 0;
    drawRect({ ctx:ctxt, x:aWakuX, y:aWakuY, width:425, height:130, radius: 20, color:"rgba(255, 255, 255, 0.8)"});
    ctxt.font = "30px 'Monotype Corsiva'";
    aStrX += 455; aStrY -= 45;
    ctxt.fillText('ツウワ',aTitleX+455,aStrY);

    ctxt.font = "35px 'Monotype Corsiva'";
    aStrX += 0; aStrY += 40;
    var aTalkList = MkText( ctxt, aTalk, 400 );
    var aTmpStrY = aStrY;
    for( var aCnt = 0; aCnt < aTalkList.length; aCnt++)
    {
        ctxt.fillText( aTalkList[ aCnt ], aStrX, aTmpStrY );
        if ( aCnt+1 < aTalkList.length )
        {
          aTmpStrY += 40;
        }
    }

    // ブキ
    aWakuX -= 455; aWakuY += 180;
    drawRect({ ctx:ctxt, x:aWakuX, y:aWakuY, width:900, height:130, radius: 20, color:"rgba(255, 255, 255, 0.8)"});
    ctxt.font = "30px 'Monotype Corsiva'";
    aStrX -= 455; aStrY += 135;
    ctxt.fillText('ブキ',aTitleX,aStrY);

    ctxt.font = "35px 'Monotype Corsiva'";
    aStrX += 0; aStrY += 40;
    var aBukiList = MkText( ctxt, aBuki, 850);
    var aTmpStrY = aStrY;
    for( var aCnt = 0; aCnt < aBukiList.length; aCnt++)
    {
        ctxt.fillText( aBukiList[ aCnt ], aStrX, aTmpStrY );
        if ( aCnt+1 < aBukiList.length )
        {
          aTmpStrY += 40;
        }
    }

    // ヒトコト
    aWakuX += 0; aWakuY += 180;
    drawRect({ ctx:ctxt, x:aWakuX, y:aWakuY, width:900, height:200, radius: 20, color:"rgba(255, 255, 255, 0.8)"});
    ctxt.font = "30px 'Monotype Corsiva'";
    aStrX += 0; aStrY += 140;
    ctxt.fillText('ヒトコト',aTitleX,aStrY);

    ctxt.font = "35px 'Monotype Corsiva'";
    var aHitokotoList = MkText( ctxt, aHitokoto, 850);
    aStrX += 0; aStrY += 40;
    for( var aCnt = 0; aCnt < aHitokotoList.length; aCnt++)
    {
        ctxt.fillText( aHitokotoList[ aCnt ], aStrX, aStrY );
        aStrY += 40;
    }
  }
  document.getElementById("dstImg").src = null;
	document.getElementById("dstImg").src = cvs.toDataURL();
}

function drawRect(param) 
{
    var ctx = param.ctx;
    var x = param.x;
    var y =param.y;
    var width = param.width;
    var height = param.height;
    var radius = param.radius || 0;
    var color = param.color;
    
    ctx.save();
        ctx.fillStyle = color;
        ctx.beginPath();
            ctx.moveTo(x + radius, y);
            ctx.lineTo(x + width - radius, y);
            ctx.arc(x + width - radius, y + radius, radius, Math.PI * 1.5, 0, false);
            ctx.lineTo(x + width, y + height - radius);
            ctx.arc(x + width - radius, y + height - radius, radius, 0, Math.PI * 0.5, false);
            ctx.lineTo(x + radius, y + height);
            ctx.arc(x + radius, y + height - radius, radius, Math.PI * 0.5, Math.PI, false);
            ctx.lineTo(x, y + radius);
            ctx.arc(x + radius, y + radius, radius, Math.PI, Math.PI * 1.5, false);
        ctx.closePath();
        ctx.fill();
    ctx.restore();
}

function MkText( pCanvas, pStr, pWidth )
{
    var aLen = pStr.length; 
    var aStrList = [];
    var aTmp = "";
 
    if ( aLen < 1 )
    {
        return aStrList;
    }
 
    for ( var aCnt = 0; aCnt < aLen; aCnt++ )
    {
        var aChar = pStr.charAt(aCnt);
        if ( aChar == "\n" )
        {
            aStrList.push( aTmp );
            aTmp = "";
            continue;
        }
 
        if ( pCanvas.measureText( aTmp + aChar ).width <= pWidth )
        {
            aTmp += aChar;
        }
        else
        {
            aStrList.push( aTmp );
            aTmp = aChar;
        }
    }
    if ( aTmp.length > 0 )
    {
        aStrList.push( aTmp );
    }
 
    return aStrList;
}

//Blobを保存
function saveBlob(blob, name)
{
  var aUrl = parent.URL || parent.webkitURL,
  objectUrl = aUrl.createObjectURL(blob),
  e = new Event('click'),
  el = document.createElement('a');
  el.href = objectUrl;
  el.download = name;  
  el.click(e);
};
//dataURL を Blob に変換
/**
 * convert data URL to blob.
 * Thanks to http://stackoverflow.com/questions/12168909/blob-from-dataurl
 */
function dataUrlToBlob(dataUrl) {
  var splitted = dataUrl.split(','),
      byteString = atob(splitted[1]),
      mimeString = splitted[0].split(':')[1].split(';')[0],
      ab = new ArrayBuffer(byteString.length),
      ia = new Uint8Array(ab);
  for (var i = 0; i < byteString.length; i++) {
    ia[i] = byteString.charCodeAt(i);
  }
  return new Blob([ia], { type: mimeString });
}
//呼び出す関数
function saveImage(){
  //canvas を探索
  var cvs = document.getElementById('srcImg');
  //canvas の dataURL を Blob に変換し保存
  saveBlob(dataUrlToBlob(cvs.toDataURL()), 'splatoon-card.png');
}
