import { useMemo } from "react";

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
const getGrandFinal = (title:any, final_name:any) => {
  if(title.toLowerCase().includes("league")) return `LEAGUE ${final_name}`
  if(title.toLowerCase().includes("reserves")) return `RESERVES ${final_name}`
  if(title.toLowerCase().includes("under 18")) return `UNDER 18 ${final_name}`
  if(title.toLowerCase().includes("under 16")) return `UNDER 16 ${final_name}`
  return "GRAND FINAL"

}
export const htmlLadderTemplate = (title:string,data:any) =>  `
<div>
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
<td>${team[ladderKeys[1]].replace("Football Club","").replace("Reserves","")}</td>
${ladderKeys.slice(2).map((key)  => `<td style="text-align: center;vertical-align: middle">${team[key]}</td>`).join(" ")}
</tr>`).join("")}

</tbody>
</table>
</div>
<div>

</div>`

export const htmlFixtureTemplate = (title:string,data:any) =>  `<div id="tabs_desc_3021_4" class="tab-pane active animated fadeInRight"><div><table width="95%"><tbody><tr><td align="right"><h2 class="fusion-responsive-typography-calculated" data-fontsize="35" data-lineheight="40px"><span style="color: dodgerblue;"><strong>
${title} ROUND 1
</strong></span></h2></td></tr></tbody></table></div>
<div><table width="95%"><tbody><tr><td align="right"><h2><span style="color: #ffffff;">__________</span></h2></td></tr></tbody></table></div>

<table style="width: 95%;" border="0" cellpadding="5"><tbody>
<tr style="height: 118.215px;"><td style="width: 156px; text-align: right; vertical-align: top; height: 118.215px;">&nbsp;</td>
<td style="width: 156px; text-align: right; vertical-align: top; height: 118.215px;">&nbsp;</td>
<td style="width: 156px; text-align: right; vertical-align: top; height: 118.215px;"><span style="color: #ffffff;"><strong><span style="color: #3366ff;">
ELIMINATION FINAL
</span></strong></span><h3><span style="color: #ffffff;"><strong>
CENTRAL DISTRICT
<br />
PORT ADELAIDE
<br /></strong></span></h3>
<span style="color: #ffffff;font-family: verdana"><strong>
SUN 03 SEP
</strong> 
12:15 PM
</span><br /><span style="color: #ffffff;font-family: verdana">
Adelaide Oval
</span></td>

<td style="width: 156px;text-align: right;vertical-align: top;height: 118.215px"><span style="color: #3366ff"><strong>
QUALIFYING FINAL 1
</strong></span>
<h3><span style="color: #ffffff"><strong>
${data.scores[0].teamName}
<br />
${data.scores[0].teamName}
<br /></strong></span></h3>
<span style="color: #ffffff;font-family: verdana"><strong>
SUN 03 SEP
</strong> 
03:15 PM
</span><br /><span style="color: #ffffff;font-family: verdana">
Adelaide Oval
</span></td></tr></tbody></table></div>
<div><table width="95%"><tbody><tr><td style="vertical-align: top" align="right"><h2><span style="color: #ffffff">__________</span></h2></td></tr></tbody></table></div>
 
 
 	 
 
<div id="tabs_desc_3021_4" class="tab-pane active animated fadeInRight"><div><table width="95%"><tbody><tr><td align="right"><h2 class="fusion-responsive-typography-calculated" data-fontsize="35" data-lineheight="40px"><span style="color: dodgerblue;"><strong>
${title} ROUND 1
</strong></span></h2></td></tr></tbody></table></div>
<div><table width="95%"><tbody><tr><td align="right"><h2><span style="color: #ffffff;">__________</span></h2></td></tr></tbody></table></div>

<table style="width: 95%;" border="0" cellpadding="5"><tbody>
<tr style="height: 118.215px;"><td style="width: 156px; text-align: right; vertical-align: top; height: 118.215px;">&nbsp;</td>
<td style="width: 156px; text-align: right; vertical-align: top; height: 118.215px;">&nbsp;</td>
<td style="width: 156px; text-align: right; vertical-align: top; height: 118.215px;"><span style="color: #ffffff;"><strong><span style="color: #3366ff;">
ELIMINATION FINAL
</span></strong></span><h3><span style="color: #ffffff;"><strong>
CENTRAL DISTRICT
<br />
PORT ADELAIDE
<br /></strong></span></h3>
<span style="color: #ffffff;font-family: verdana"><strong>
SUN 03 SEP
</strong> 
12:15 PM
</span><br /><span style="color: #ffffff;font-family: verdana">
Adelaide Oval
</span></td>

<td style="width: 156px;text-align: right;vertical-align: top;height: 118.215px"><span style="color: #3366ff"><strong>
QUALIFYING FINAL 1
</strong></span>
<h3><span style="color: #ffffff"><strong>
STURT
<br />
ADELAIDE
<br /></strong></span></h3>
<span style="color: #ffffff;font-family: verdana"><strong>
SUN 03 SEP
</strong> 
03:15 PM
</span><br /><span style="color: #ffffff;font-family: verdana">
Adelaide Oval
</span></td></tr></tbody></table></div>
<div><table width="95%"><tbody><tr><td style="vertical-align: top" align="right"><h2><span style="color: #ffffff">__________</span></h2></td></tr></tbody></table></div>
`


export const htmlResultTemplate = (title:string,team1:string, team2:string,data:any) => {
  return `<div><table width="95%"><tbody><tr><td align="right"><h2 class="fusion-responsive-typography-calculated" data-fontsize="35" data-lineheight="40px"><span style="color: dodgerblue"><strong>
  ${data?.round}
  </strong><br /></span></h2></td></tr></tbody></table></div>
  <div><table width="95%"><tbody><tr style="height: 35px"><td style="height: 35px" align="right"><h2><span style="color: #ffffff">__________</span></h2></td></tr></tbody></table></div>
  
  <div><table width="95%"><thead><tr><th align="right"><tbody><tr><th align="right"><h3><span style="color: dodgerblue"><strong>
  ${getGrandFinal(title,'GRAND FINAL')}
  </strong></span></h3><p><span style="color: #ffffff">
  ${data?.date.split(",")[1].slice(0,4)?.toUpperCase()}
  ${data?.date.split(",")[2].toUpperCase()?.split(" ")?.slice(0,3)?.join(" ")}
  </span> <br />
  ${data?.place?.split("/")[0]}
  </p> </th></tr></thead></table></div>
  
  <table style="height: auto;width: 90%;margin-left: auto;margin-right: auto" border=".3" cellpadding="4">
  <tbody>
  <tr style="height: 39px">
  <td style="width: 11%;height: 39px;text-align: center;vertical-align: middle">
  <p> </p>
  </td>
  <td style="width: 11%;height: 39px;text-align: center;vertical-align: middle">
  <h4><span style="color: #ffffff"><strong>Q1</strong></span></h4>
  </td>
  <td style="width: 11%;height: 39px;text-align: center;vertical-align: middle">
  <h4><span style="color: #ffffff"><strong>Q2</strong></span></h4>
  </td>
  <td style="width: 11%;height: 39px;text-align: center;vertical-align: middle">
  <h4><span style="color: #ffffff"><strong>Q3</strong></span></h4>
  </td>
  <td style="width: 10%;height: 39px;text-align: center;vertical-align: middle">
  <h4><span style="color: #ffffff"><strong>Q4</strong></span></h4>
  </td>
  <td style="width: 18.5749%;height: 39px;text-align: center;vertical-align: middle">
  <h3><span style="color: #ffffff"><strong>FINAL</strong></span></h3>
  </td>
  </tr>
  <tr style="height: 48.0174px">
  <td style="width: 11%;height: 39px;text-align: center;vertical-align: middle">
  <h3 class="fusion-responsive-typography-calculated" data-fontsize="35" data-lineheight="42px"><span style="color: #ffffff"><strong>
  
  ${data.scores[0].teamName.split(" ")[0]?.toUpperCase()}
  </strong></span></h3></td>
  ${data.scores[0].points.map((point: any,index:number)  => `<td style="width: 11%;height: 39px;vertical-align: middle;text-align: center"><h4><span style="color: #ffffff">
  ${data.scores[0].secondValues[index]}-${point}
  </span></h4></td>` )}
  
  <td style="width: 18.5749%;height: 39px;text-align: center;vertical-align: middle"><h2><span style="color: dodgerblue"><strong>
  ${data.scores[0].secondValues[3]}-${data.scores[0].points[3]}
  
  </strong></span></h2></td></tr>
  
  <tr style="height: 39px"><td style="width: 11%;height: 39px;text-align: center;vertical-align: middle">
  <h3 class="fusion-responsive-typography-calculated" data-fontsize="35" data-lineheight="42px"><span style="color: #ffffff"><strong>
  ${data.scores[1].teamName.split(" ")[0]?.toUpperCase()}
  
  </strong></span></h3></td>
  ${data.scores[1].points.map((point: any,index:number)  => `<td style="width: 11%;height: 39px;vertical-align: middle;text-align: center"><h4><span style="color: #ffffff">
  ${data.scores[1].secondValues[index]}-${point}
  </span></h4></td>` )}
  <td style="width: 18.5749%;height: 39px;text-align: center;vertical-align: middle"><h2><span style="color: dodgerblue"><strong>
  ${data.scores[1].secondValues[3]}-${data.scores[1].points[3]}
  </strong></span></h2></td></tr></tbody></table>
  
  <div><table style="height: 171px;width: 90%;margin-left: auto;margin-right: auto" border="0" cellspacing="0" cellpadding="5"><tbody>
  <tr style="height: 60px">
  <td style="width: 10%;height: 60px;vertical-align: middle;text-align: left"> </td>
  <td style="width: 45%;height: 60px;vertical-align: middle;text-align: left"><h4><span style="color: #ffffff"><strong>
  ${team1.toUpperCase()}
  </strong></span></h4></td>
  <td style="width: 45%;height: 60px;vertical-align: middle;text-align: left"><h4><span style="color: #ffffff"><strong>
  ${team2.toUpperCase()}
  </strong></span></h4></td></tr>
  
  <tr style="height: 61.3507px">
  <td style="width: 10%;height: 60px;vertical-align: top;text-align: left"><p><strong>
  GOAL KICKERS
  </strong></p></td>
  <td style="width: 45%;height: 50px;vertical-align: top;text-align: left;font-family: sans-serif"><p>
  ${data?.goalKeepers?.team_1?.length > 0 ? data?.goalKeepers?.team_1?.map((goalKeeper: any) => `${goalKeeper.player} ${goalKeeper.goal} `)?.join(",") : "-"}
  </p></td>
  <td style="width: 45%;height: 50px;vertical-align: top;text-align: left;font-family: sans-serif"><p>
  ${data?.goalKeepers?.team_2?.length > 0 ? data?.goalKeepers?.team_2?.map((goalKeeper: any) => `${goalKeeper.player} ${goalKeeper.goal} `)?.join(",") : "-"}
  </p></td></tr>
  
  <tr style="height: 61.3507px">
  <td style="width: 10%;height: 50px;vertical-align: top;text-align: left"><p><strong>
  BEST PLAYERS
  </strong></p></td>
  <td style="width: 45%;height: 50px;vertical-align: top;text-align: left;font-family: sans-serif"><p>
  ${data?.bestPlayers?.team_1?.length > 0 ? data?.bestPlayers?.team_1?.map((player: any) => `${player} `).join(",") : "-"}
  </p></td>
  <td style="width: 45%;height: 50px;vertical-align: top;text-align: left;font-family: sans-serif"><p>
  ${data?.bestPlayers?.team_2?.length > 0 ? data?.bestPlayers?.team_2?.map((player: any) => `${player} `).join(",") : "-"}
  </p></td></tr></tbody></table></div>
  
  <div><table width="95%"><tbody><tr style="height: 35px"><td style="height: 35px" align="right"><h2><span style="color: #ffffff">__________</span></h2></td></tr></tbody></table></div>
  
  
  
  
  `
  
}
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
${data?.slice(0,26).map((team: any)  => `<tr>
<td style="text-align: center;vertical-align: middle" data-sheets-value="{"1":2,"2":"${team[statisticsKeys[0]]}"}" data-sheets-numberformat="{"1":1}">${team[statisticsKeys[0]]}</td>
<td data-sheets-value="{"1":2,"2":"${team[statisticsKeys[1]]}"}" data-sheets-numberformat="{"1":1}">${team[statisticsKeys[1]]}</td>
<td data-sheets-value="{"1":2,"2":"${team[statisticsKeys[2]]}"}" data-sheets-numberformat="{"1":1}">${team[statisticsKeys[2]].replace("Football Club","").replace("Reserves","")}</td>
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

