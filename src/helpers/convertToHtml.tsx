const ladderKeys = [
    "a",
    "Team",
    "P",
    "PTS",
    "%",
    "W",
    "L",
    "D",
    "BYE",
    "F",
    "A",
    "FORF",
  ];
//   <table width="95%">
// <tbody>
// <tr style="height: 47.4688px">
// <td style="height: 47.4688px" align="right">
// <h2 class="fusion-responsive-typography-calculated" data-fontsize="35" data-lineheight="42px">__________</h2>
// </td>
// </tr>
// </tbody>
// </table>
export const htmlLadderTemplate = (title:string,data:any) =>  `
<div>
<div>
<table style="margin-right: 70px;float: right" width="100%">
<tbody>
<tr style="height: 40px">
<td style="height: 40px" align="right">
<h2 class="fusion-responsive-typography-calculated" style="color: dodgerblue" data-fontsize="35" data-lineheight="40px"><strong>2023 SANFL RESERVES PREMIERSHIP TABLE</strong></h2>
</td>
</tr>
</tbody>
</table>
</div>
<div>

</div>
<h2 class="fusion-responsive-typography-calculated" data-fontsize="35" data-lineheight="42px"> </h2>
<table dir="ltr" style="width: 90%;margin-left: auto;margin-right: auto" border=".5" cellpadding="5"><colgroup><col width="23" /><col width="123" /><col width="16" /><col width="32" /><col width="43" /><col width="20" /><col width="15" /><col width="16" /><col width="33" /><col width="42" /></colgroup>
<tbody>
<tr>
<td style="text-align: center;vertical-align: middle"> </td>
<td><strong>TEAM</strong></td>
<td style="text-align: center"><strong>P</strong></td>
<td style="text-align: center"><strong>PTS</strong></td>
<td style="text-align: center"><strong>%</strong></td>
<td style="text-align: center"><strong>W</strong></td>
<td style="text-align: center"><strong>L</strong></td>
<td style="text-align: center"><strong>D</strong></td>
<td style="text-align: center"><strong>BYE</strong></td>
<td style="text-align: center"><strong>F</strong></td>
<td style="text-align: center"><strong>A</strong></td>
<td style="text-align: center"><strong>FORF</strong></td>
</tr>
${data.map((team: any)  => `
<tr>
<td style="text-align: center;vertical-align: middle">${team[ladderKeys[0]]}</td>
<td>${team[ladderKeys[1]]}</td>
${ladderKeys.slice(2).map((key)  => `<td style="text-align: center;vertical-align: middle">${team[key]}</td>`).join(" ")}
</tr>`).join("")}

</tbody>
</table>
</div>
<div>

</div>`

export const htmlFixtureTemplate = (title:string,data:any) =>  `
<div id="tabs_desc_3021_4" class="tab-pane active animated fadeInRight"><div><table width="95%"><tbody><tr><td align="right"><h2 class="fusion-responsive-typography-calculated"  data-fontsize="35" data-lineheight="40px"><span style="color: dodgerblue;"><strong>
SANFL U16s FINALS ROUND 1
</strong></span></h2></td></tr></tbody></table></div>
<div><table width="95%"><tbody><tr><td align="right"><h2><span style="color: #ffffff;">__________</span></h2></td></tr></tbody></table></div>

<table style="width: 95%;" border="0" cellpadding="5"><tbody>
<tr style="height: 118.215px;"><td style="width: 156px; text-align: right; vertical-align: top; height: 118.215px;">&nbsp;</td>
<td style="width: 156px; text-align: right; vertical-align: top; height: 118.215px;">&nbsp;</td>
<td style="width: 156px; text-align: right; vertical-align: top; height: 118.215px;"><span style="color: #ffffff;"><strong><span style="color: #3366ff;">
QUALIFYING FINAL
</span></strong></span><h3><span style="color: #ffffff;"><strong>
STURT
<br />
CENTRAL DISTRICT
<br /></strong></span></h3>
<span style="color: #ffffff;font-family: verdana"><strong>
FRI 01 SEP
</strong> 
05:30 PM
</span><br /><span style="color: #ffffff;font-family: verdana">
Thebarton Oval
</span></td>

<td style="width: 156px;text-align: right;vertical-align: top;height: 118.215px"><span style="color: #3366ff"><strong>
ELIMINATION FINAL
</strong></span>
<h3><span style="color: #ffffff"><strong>
WEST ADELAIDE
<br />
NORTH ADELAIDE
<br /></strong></span></h3>
<span style="color: #ffffff;font-family: verdana"><strong>
SAT 02 SEP
</strong> 
04:00 PM
</span><br /><span style="color: #ffffff;font-family: verdana">
Richmond Oval
</span></td></tr></tbody></table></div>
<div><table width="95%"><tbody><tr><td style="vertical-align: top" align="right"><h2><span style="color: #ffffff">__________</span></h2></td></tr></tbody></table></div>`

const statisticsKeys = [ "rank",
"player",
'team',
"gp",
"g",]
export const htmlStatisticsTemplate = (title:string,data:any) =>  `<div>
<div>
<table style="margin-right: 70px;float: right" width="100%">
<tbody>
<tr style="height: 40px">
<td style="height: 40px" align="right">
<h2 class="fusion-responsive-typography-calculated" style="color: dodgerblue" data-fontsize="35" data-lineheight="40px"><strong>${title}</strong></h2>
</td>
</tr>
</tbody>
</table>
</div>
<h2 class="fusion-responsive-typography-calculated" data-fontsize="35" data-lineheight="42px"> </h2>
<table dir="ltr" style="width: 70%;font-size: 90%;margin-right: 70px;float: right" border=".2" cellpadding="5"><colgroup><col width="47" /><col width="137" /><col width="109" /><col width="78" /><col width="55" /></colgroup>
<tbody>
<tr>
<td style="text-align: center;vertical-align: middle" data-sheets-numberformat="{"1":1}"> </td>
<td data-sheets-value="{"1":2,"2":"PLAYER NAME"}" data-sheets-numberformat="{"1":1}"><strong>PLAYER NAME</strong></td>
<td data-sheets-value="{"1":2,"2":"TEAM"}" data-sheets-numberformat="{"1":1}"><strong>TEAM</strong></td>
<td style="text-align: center;vertical-align: middle" data-sheets-value="{"1":2,"2":"MATCHES"}" data-sheets-numberformat="{"1":1}"><strong>MATCHES</strong></td>
<td style="text-align: center;vertical-align: middle" data-sheets-value="{"1":2,"2":"GOALS"}" data-sheets-numberformat="{"1":1}"><strong>GOALS</strong></td>
</tr>
---------------------^^^^^^^^^^^^^^^^^
${data.slice(0,10).map((team: any)  => `<tr>
<td style="text-align: center;vertical-align: middle" data-sheets-value="{"1":2,"2":"${team[statisticsKeys[0]]}"}" data-sheets-numberformat="{"1":1}">${team['statisticsKeys[0]']}</td>
<td data-sheets-value="{"1":2,"2":"${team[statisticsKeys[1]]}"}" data-sheets-numberformat="{"1":1}">${team[statisticsKeys[1]]}</td>
<td data-sheets-value="{"1":2,"2":"${team[statisticsKeys[2]]}"}" data-sheets-numberformat="{"1":1}">${team[statisticsKeys[2]]}</td>
<td style="text-align: center;vertical-align: middle" data-sheets-value="{"1":2,"2":"${team[statisticsKeys[3]]}"}" data-sheets-numberformat="{"1":1}">${team[statisticsKeys[3]]}</td>
<td style="text-align: center;vertical-align: middle" data-sheets-value="{"1":3,"3":${team[statisticsKeys[4]]}}">${team[statisticsKeys[4]]}</td>
</tr>`).join("")}
</tbody>
</table>
</div>
<div>
<table width="95%">
<tbody>
<tr>
<td align="right"> </td>
</tr>
</tbody>
</table>
</div>`