/* Hebrew strings for every tool. English is the source text; add a line here when a tool gets new text. */
(function(){
var ZIN={'front row':'בשורה הקדמית','front two rows':'בשתי השורות הקדמיות','middle rows':'בשורות האמצעיות','back two rows':'בשתי השורות האחוריות','back row':'בשורה האחורית','left column':'בעמודה השמאלית','middle columns':'בעמודות האמצעיות','right column':'בעמודה הימנית'};
var ZDEF={'front row':'השורה הקדמית','front two rows':'שתי השורות הקדמיות','middle rows':'השורות האמצעיות','back two rows':'שתי השורות האחוריות','back row':'השורה האחורית','left column':'העמודה השמאלית','middle columns':'העמודות האמצעיות','right column':'העמודה הימנית'};
var MODES={'side by side only':'רק זה לצד זה','side by side or front/back':'זה לצד זה או קדימה/אחורה','any direction, diagonals too':'כל כיוון, כולל באלכסון','within 2 seats':'עד 2 כיסאות'};
var PRIS={'Must':'חובה','High':'גבוהה','Medium':'בינונית','Low':'נמוכה'};
var LV={'Easy':'קל','Fine':'סביר','Hard':'קשה','Very hard':'קשה מאוד','Can’t read':'לא קריא'};
function pl(n,one,many){return n===1?one:many;}
function D(s){return ZDEF[s]||s;}
function rowText(s){ // "row 1 (front), any chair" etc. inside a want target
  return s;
}
var M={
 /* landing page */
 'Small tools for the classroom. They run in your browser, nothing is uploaded, and nothing is saved on a server.':'כלים קטנים לכיתה. הם רצים בדפדפן שלכם, שום דבר לא מועלה ושום דבר לא נשמר בשרת.',
 'Seat Planner':'מתכנן הושבה','Plan seating with rules, kids\' wants, and eye-test results. Drag kids around, auto-arrange, and save plans.':'תכננו הושבה עם כללים, בקשות של ילדים ותוצאות בדיקות ראייה. גררו ילדים, סדרו אוטומטית ושמרו תוכניות.',
 'Work out how well a kid can see the board from each row, using a simple chart test. Works with a projected chart and floor tiles.':'חשבו עד כמה ילד יכול לראות את הלוח מכל שורה, לפי בדיקת טבלה פשוטה. עובד עם טבלה מוקרנת ועם אריחי רצפה.',
 'Open →':'פתיחה ←','More tools coming':'עוד כלים בקרוב',
 'Your work is not stored by the site. Each tool has a backup button to save a file to your computer, and a restore button to load it again.':'האתר לא שומר את העבודה שלכם. בכל כלי יש כפתור גיבוי ששומר קובץ במחשב שלכם, וכפתור שחזור שטוען אותו שוב.',
 'Switch to English':'Switch to English','Open':'פתיחה',
 /* page chrome */
 'Seat Planner · Teacher Tools':'מתכנן הושבה · כלי מורה','Teacher Tools':'כלי מורה','← Teacher Tools':'← כלי מורה',
 'Class Seat Planner':'מתכנן הושבה לכיתה','Eye Test Helper':'עוזר בדיקת ראייה','Eye Test · Teacher Tools':'בדיקת ראייה · כלי מורה',
 'Undo':'בטל','Rows':'שורות','Columns':'עמודות','Fewer rows':'פחות שורות','More rows':'יותר שורות','Fewer columns':'פחות עמודות','More columns':'יותר עמודות',
 'Auto-arrange':'סידור אוטומטי','Clear':'נקה','Save as plan':'שמור כתוכנית','Edit layout':'עריכת פריסה','Done editing layout':'סיום עריכת פריסה','Reset layout':'איפוס פריסה',
 'Move everyone except pinned kids out of the desks':'הוצא את כולם מהשולחנות חוץ מילדים מוצמדים',
 'Remove desks or add extra tables to change the room shape':'הסרת שולחנות או הוספת שולחנות נוספים כדי לשנות את צורת הכיתה',
 'Tap a desk to remove it, or an empty spot to add one. Use Rows and Columns to make the room bigger.':'לחצו על שולחן כדי להסיר אותו, או על מקום ריק כדי להוסיף שולחן. אפשר להגדיל את הכיתה עם שורות ועמודות.',
 'BOARD ·':'','BOARD':'לוח','Back of the room':'סוף הכיתה','Not seated':'לא יושבים','Everyone is seated.':'כולם יושבים.',
 'Classroom':'כיתה','Rules, kids and plans':'כללים, ילדים ותוכניות',
 'Drag a kid onto a desk, or tap a kid and then a desk. The pin on a desk keeps that kid in place when you auto-arrange. A yellow dot on a kid means their want is not met yet (red if it is a must).':'גררו ילד אל שולחן, או לחצו על ילד ואז על שולחן. הנעץ על השולחן משאיר את הילד במקומו בסידור אוטומטי. נקודה צהובה על ילד אומרת שהבקשה שלו עוד לא התמלאה (אדומה אם היא חובה).',
 'Rules':'כללים','Wants':'בקשות','Eyes':'ראייה','Kids':'ילדים','Plans':'תוכניות',
 'Not saved automatically. Use Backup file on the Plans tab to keep your work.':'לא נשמר אוטומטית. השתמשו ב"קובץ גיבוי" בלשונית תוכניות כדי לשמור את העבודה.',
 'Not saved automatically. Use Backup file to keep your work.':'לא נשמר אוטומטית. השתמשו ב"קובץ גיבוי" כדי לשמור את העבודה.',
 /* status */
 'No rules on':'אין כללים פעילים','All rules met':'כל הכללים מתקיימים','Working…':'עובד…',
 'There are more kids than desks. Add a row or column.':'יש יותר ילדים מאשר שולחנות. הוסיפו שורה או עמודה.',
 'Add kids to see how many arrangements are possible.':'הוסיפו ילדים כדי לראות כמה סידורים אפשריים.',
 'These rules can’t all be met.':'אי אפשר לקיים את כל הכללים.','Which rule is the problem?':'איזה כלל גורם לבעיה?',
 'counting arrangements that meet every want…':'סופר סידורים שמקיימים כל בקשה…','counting with your pinned kids…':'סופר עם הילדים המוצמדים…',
 'found so far, still counting…':'נמצאו עד כה, עדיין סופר…','possible arrangements (stopped counting, there are more)':'סידורים אפשריים (הספירה נעצרה, יש עוד)',
 'No arrangement meets every want. Auto-arrange favors the higher priorities.':'אין סידור שמקיים את כל הבקשות. הסידור האוטומטי מעדיף את העדיפויות הגבוהות.',
 /* rule builder */
 'New rule':'כלל חדש','Can’t sit next to':'אסור לשבת ליד','Must sit next to':'חובה לשבת ליד','Must sit next to (at least one of)':'חובה לשבת ליד (לפחות אחד מ)','Row or column':'שורה או עמודה','Fixed seat':'מקום קבוע',
 'Who':'מי','Kid':'ילד','Next to means':'"ליד" אומר','must be in':'חייב להיות ב','must not be in':'אסור להיות ב','Add rule':'הוספת כלל','Pick who the rule is about.':'בחרו על מי הכלל.',
 'Row':'שורה','Column':'עמודה','Where':'איפה','Must or must not':'חובה או אסור','Rule type':'סוג כלל','What next to means':'מה זה "ליד"','Rule on':'כלל פעיל','Delete rule':'מחיקת כלל',
 'Turn this rule on or off':'הפעלה או כיבוי של הכלל','No rules yet. Build one above.':'אין כללים עדיין. בנו אחד למעלה.',
 'Rule is off':'הכלל כבוי','Broken':'מופר','Met':'מתקיים','Waiting for kids to be seated':'ממתין שהילדים יישבו',
 'can’t sit next to':'אסור לשבת ליד','must sit next to':'חובה לשבת ליד','must sit next to one of':'חובה לשבת ליד אחד מ',
 /* plans */
 'Save and generate':'שמירה ויצירה','Save current':'שמור נוכחי','Make':'צרו','different valid plans':'תוכניות תקינות שונות','Generate':'יצירה','Valid':'תקין','Load':'טען','Load this plan':'טעינת התוכנית',
 'No saved plans yet.':'אין תוכניות שמורות עדיין.','Share and back up':'שיתוף וגיבוי','Image of this plan':'תמונה של התוכנית','Image of all plans':'תמונה של כל התוכניות','Copy as text':'העתקה כטקסט','Backup file':'קובץ גיבוי','Restore backup':'שחזור מגיבוי',
 'How many plans':'כמה תוכניות','Plan name':'שם התוכנית','Delete':'מחק',
 /* kids */
 'Class list':'רשימת הכיתה','Name':'שם','Second name (optional)':'שם שני (לא חובה)','Second name':'שם שני','New kid name':'שם ילד חדש','New kid second name':'שם שני לילד חדש','Add':'הוסף','Remove kid':'הסרת ילד',
 'Removing a kid also removes them from rules and saved plans.':'הסרת ילד מסירה אותו גם מהכללים ומהתוכניות השמורות.',
 /* wants */
 'Where kids want to sit':'איפה ילדים רוצים לשבת','What they want':'מה הם רוצים','Add kids on the Kids tab first.':'קודם הוסיפו ילדים בלשונית ילדים.',
 'To sit in a specific seat':'לשבת במקום מסוים','To sit in a row (any chair)':'לשבת בשורה (כל כיסא)','To sit in a column (any row)':'לשבת בעמודה (כל שורה)','To sit in the first few rows':'לשבת בכמה השורות הראשונות','To sit in an area':'לשבת באזור','Not to sit next to a kid':'לא לשבת ליד ילד',
 'Kind of spot':'סוג מקום','Up to row':'עד שורה','Area':'אזור','Away from':'הרחק מ','Kid to sit away from':'ילד להתרחק ממנו','Counts as next to':'נחשב "ליד"',
 'Why':'למה','Note (optional), for example: wears glasses, gets distracted':'הערה (לא חובה), לדוגמה: מרכיב משקפיים, מתפזר','Note':'הערה',
 'Health, sight or hearing':'בריאות, ראייה או שמיעה','Focus or distraction':'ריכוז או הסחת דעת','Behavior support':'תמיכה התנהגותית','Doesn’t get along':'לא מסתדר','Friends or social':'חברים או חברתי','Just prefers it':'פשוט מעדיף','Other':'אחר',
 'How much it matters':'כמה זה חשוב','Priority':'עדיפות','Must':'חובה','High':'גבוהה','Medium':'בינונית','Low':'נמוכה',
 'Auto-arrange always honors this. If that is impossible it tells you which rule is in the way.':'הסידור האוטומטי תמיד מכבד את זה. אם אי אפשר, הוא יגיד איזה כלל מפריע.',
 'Auto-arrange tries hard. A High want beats several Medium and Low wants.':'הסידור האוטומטי משתדל מאוד. בקשה בעדיפות גבוהה גוברת על כמה בקשות בינוניות ונמוכות.',
 'Granted unless it costs a High want.':'תתמלא אלא אם זה עולה בבקשה בעדיפות גבוהה.',
 'Nice to have. Granted when nothing more important is in the way.':'נחמד שיהיה. תתמלא כשאין דבר חשוב יותר שמפריע.',
 'Add want':'הוספת בקשה','Update want':'עדכון בקשה','Cancel edit':'ביטול עריכה','Remove want':'הסרת בקשה','Edit':'עריכה','Turn this want on or off':'הפעלה או כיבוי של הבקשה','Want on':'בקשה פעילה',
 'No wants yet. Pick a kid above, say where they want to sit and why, then set how much it matters. Kids you leave out have no preference.':'אין בקשות עדיין. בחרו ילד למעלה, אמרו איפה הוא רוצה לשבת ולמה, ואז קבעו כמה זה חשוב. ילדים שלא הוספתם אין להם העדפה.',
 'wants':'מעדיף/ה','Suggested:':'מומלץ:','Apply':'החל','Apply all suggestions':'החל את כל ההמלצות','Remove want ':'הסרת בקשה ',
 /* eyes */
 'Eye tests':'בדיקות ראייה','Enter how far away each kid stood and the smallest line they could read. The planner works out how easy the board is to read from each row.':'הזינו כמה רחוק כל ילד עמד ואת השורה הקטנה ביותר שהצליח לקרוא. התוכנה מחשבת עד כמה קל לקרוא את הלוח מכל שורה.',
 'Your room':'הכיתה שלכם','Measure the room in':'למדוד את הכיתה ב','meters':'מטרים','feet':'רגל','floor tiles':'אריחי רצפה','Size of one floor tile (cm)':'גודל אריח רצפה אחד (ס"מ)',
 'Rows of desks in the room':'שורות שולחנות בכיתה','Board letters, height (cm)':'אותיות על הלוח, גובה (ס"מ)',
'Distance is measured straight back from the board. Seats off to the side are a little farther than this. Measure one floor tile along its side, then just count tiles.':'המרחק נמדד ישר אחורה מהלוח. מקומות בצד קצת רחוקים יותר מזה. מדדו אריח רצפה אחד לאורך הצלע שלו, ואז פשוט ספרו אריחים.',
 'Distance is measured straight back from the board. Seats off to the side are a little farther than this.':'המרחק נמדד ישר אחורה מהלוח. מקומות בצד קצת רחוקים יותר מזה.',
 ' Measure one floor tile along its side, then just count tiles.':' מדדו אריח רצפה אחד לאורך הצלע שלו, ואז פשוט ספרו אריחים.',
 'Kid name (optional)':'שם הילד (לא חובה)',
 'How far away they stood':'כמה רחוק הם עמדו','Distance':'מרחק','Unit':'יחידה',
 'Height of the big E on the projected chart (cm)':'גובה ה-E הגדולה בטבלה המוקרנת (ס"מ)','Measure it, or leave empty':'מדדו, או השאירו ריק',
 'A projected chart is not the printed size, so measure the tall E at the top with a ruler. On the printed page it is about 4.4 cm. If you leave it empty the planner assumes the printed size and marks the result as a rough guess.':'טבלה מוקרנת היא לא בגודל המודפס, אז מדדו בסרגל את ה-E הגדולה שבראש הטבלה. בדף המודפס היא בגובה של כ-4.4 ס"מ. אם תשאירו ריק, התוכנה תניח את הגודל המודפס ותסמן את התוצאה כהערכה גסה.',
 'Smallest line they read':'השורה הקטנה ביותר שקראו','Both eyes':'שתי העיניים','Right eye':'עין ימין','Left eye':'עין שמאל','Not tested':'לא נבדק',
 'Pick the last line where they got at least half the letters. Use Not tested for anything you skipped. If you filled in more than one, the best one is used.':'בחרו את השורה האחרונה שבה זיהו לפחות חצי מהאותיות. השתמשו ב"לא נבדק" למה שדילגתם עליו. אם מילאתם יותר מאחד, נשתמש בטוב ביותר.',
 ' They wore glasses during the test':' הם הרכיבו משקפיים בזמן הבדיקה','They wore glasses during the test':'הם הרכיבו משקפיים בזמן הבדיקה',
 'Enter the distance and a line to see the estimated acuity.':'הזינו מרחק ושורה כדי לראות את חדות הראייה המשוערת.',
 'Show the eye chart':'הצגת טבלת הראייה',
 'This is the chart to put up for the test: 9 lines from 20/200 (top) to 20/20. Print it at 100% size on a letter page, or project it. Put it 10 feet (3 meters) from the kid. If you project it, measure the big E on the wall and enter that below.':'זו הטבלה לתלות לבדיקה: 9 שורות מ-20/200 (למעלה) עד 20/20. אפשר להדפיס אותה ב-100% על דף Letter, או להקרין אותה. מניחים אותה 10 רגל (3 מטר) מהילד. אם מקרינים, מודדים את ה-E הגדול על הקיר ומזינים את המידה למטה.',
 'Eye chart with nine lines, 20/200 at the top to 20/20 at the bottom':'טבלת ראייה עם תשע שורות, מ-20/200 למעלה עד 20/20 למטה',
 'Print chart':'הדפסת הטבלה','Download chart':'הורדת הטבלה',
 'Place chart 10 feet (3 meters) away.':'מניחים את הטבלה במרחק 10 רגל (3 מטר).',
 'Place chart 10 feet (3 meters) away. Print at 100% size.':'מניחים את הטבלה במרחק 10 רגל (3 מטר). מדפיסים בגודל 100%.',
 'Cover one eye, read each line out loud, and stop at the line where they miss more than half the letters. Pick that line below. Test with and without glasses if they wear them.':'מכסים עין אחת, קוראים כל שורה בקול, ועוצרים בשורה שבה טעו ביותר ממחצית האותיות. בוחרים את השורה הזו למטה. אם הילד מרכיב משקפיים, בודקים גם איתם וגם בלעדיהם.',
 'Add kids on the Kids tab to enter their eye tests.':'מוסיפים ילדים בלשונית ילדים כדי להזין בדיקות ראייה.',
 'Save test':'שמירת בדיקה','Update test':'עדכון בדיקה','Remove test':'הסרת בדיקה','No eye tests yet.':'אין בדיקות ראייה עדיין.',
 'This is a rough guide from a chart screening, not a medical test. Fine means the board letters are comfortably bigger than the smallest the kid can read. Hard means they will probably squint or miss things. A kid with a real concern should see an eye doctor.':'זו הערכה גסה מסינון בטבלה, לא בדיקה רפואית. "סביר" אומר שאותיות הלוח גדולות בנוחות מהקטנות ביותר שהילד קורא. "קשה" אומר שכנראה יצטרך לכווץ עיניים או יפספס דברים. ילד שיש לגביו דאגה אמיתית צריך ללכת לרופא עיניים.',
 'Board visibility by row':'נראות הלוח לפי שורה','Fine from every row':'סביר מכל שורה','No row is comfortable. The front row is the best choice.':'אף שורה לא נוחה. השורה הקדמית היא הבחירה הטובה ביותר.',
 'rough guess: chart size not entered':'הערכה גסה: גודל הטבלה לא הוזן','with glasses':'עם משקפיים','Not seated right now':'לא יושב כרגע',
 'both eyes':'שתי העיניים','right':'ימין','left':'שמאל','tile':'אריח','tiles':'אריחים',
 'Remove test ':'הסרת בדיקה ',
 'Distance is about':'המרחק הוא כ',
 /* levels */
 'Easy':'קל','Fine':'סביר','Hard':'קשה','Very hard':'קשה מאוד','Can’t read':'לא קריא',
 /* toasts */
 'Nothing to undo':'אין מה לבטל','Undone':'בוטל','Rule added':'כלל נוסף','Rule deleted':'הכלל נמחק','Plan deleted':'התוכנית נמחקה','Backup restored':'הגיבוי שוחזר',
 'Saved eye-test-backup.json':'נשמר eye-test-backup.json','Saved seat-planner-backup.json':'נשמר seat-planner-backup.json','Saved seating-plan.png':'נשמר seating-plan.png','Saved seating-plans.png':'נשמר seating-plans.png',
 'That file is not a seat planner backup.':'הקובץ הזה אינו גיבוי של מתכנן ההושבה.','That file is not an eye test backup.':'הקובץ הזה אינו גיבוי של בדיקת ראייה.','Could not read that file.':'לא הצלחנו לקרוא את הקובץ.','Could not save the file.':'לא הצלחנו לשמור את הקובץ.',
 'Save or generate some plans first.':'קודם שמרו או צרו כמה תוכניות.','Copy is blocked here. Use the image export instead.':'ההעתקה חסומה כאן. השתמשו בייצוא תמונה.','Copied. Board is the first line, front row next.':'הועתק. הלוח בשורה הראשונה, אחריו השורה הקדמית.',
 'Arranged. Every want was met.':'סודר. כל הבקשות התמלאו.',
 'No seating meets every rule, or it took too long to find one. Try turning a rule off or unpinning kids.':'אין הושבה שמקיימת את כל הכללים, או שהחיפוש לקח יותר מדי זמן. נסו לכבות כלל או לבטל הצמדה של ילדים.',
 'That is the most wants one kid can have (8).':'זה המקסימום של בקשות לילד אחד (8).',
 'Enter how far away the kid stood.':'הזינו כמה רחוק הילד עמד.','Pick the smallest line they read.':'בחרו את השורה הקטנה ביותר שקראו.',
 'Saved an eye test':'נשמרה בדיקת ראייה','Updated the eye test':'בדיקת הראייה עודכנה','Removed the eye test':'בדיקת הראייה הוסרה',
 'Pin: keep in place when auto-arranging':'הצמדה: להשאיר במקום בסידור אוטומטי','Pinned: stays put when auto-arranging':'מוצמד: נשאר במקומו בסידור אוטומטי',
 'Seating plan':'תוכנית הושבה','Remove':'הסרה'
};
var R=[
 [/^Plan (\d+)$/,function(m){return 'תוכנית '+m[1];}],
 [/^(\d+) rules? broken$/,function(m){return m[1]==='1'?'כלל אחד מופר':m[1]+' כללים מופרים';}],
 [/^(\d+) must-have wants? not met$/,function(m){return m[1]==='1'?'בקשת חובה אחת לא מתקיימת':m[1]+' בקשות חובה לא מתקיימות';}],
 [/^(\d+) wants? not met$/,function(m){return m[1]==='1'?'בקשה אחת לא מתקיימת':m[1]+' בקשות לא מתקיימות';}],
 [/^(\d+) not seated$/,function(m){return m[1]+' לא יושבים';}],
 [/^(\d+) kids? can’t read the board from their seats?$/,function(m){return m[1]==='1'?'ילד אחד לא יכול לקרוא את הלוח מהמקום שלו':m[1]+' ילדים לא יכולים לקרוא את הלוח מהמקום שלהם';}],
 [/^(\d+) kids? may struggle to see the board$/,function(m){return m[1]==='1'?'ילד אחד אולי יתקשה לראות את הלוח':m[1]+' ילדים אולי יתקשו לראות את הלוח';}],
 [/^(\d+) wants? differs? from the suggested priority\.$/,function(m){return m[1]==='1'?'בקשה אחת שונה מהעדיפות המומלצת.':m[1]+' בקשות שונות מהעדיפות המומלצת.';}],
 [/^possible arrangements?$/,function(){return 'סידורים אפשריים';}],
 [/^out of ([\d,.\sa-zA-Z]+) ways to seat (\d+) kids(.*)$/,function(m){return 'מתוך '+m[1]+' דרכים להושיב '+m[2]+' ילדים'+m[3].replace(/pass your rules/,'עומדים בכללים');}],
 [/^(.+) of them also meet every want$/,function(m){return m[1]+' מהם מקיימים גם כל בקשה';}],
 [/^out of (.+) ways to seat (\d+) kids$/,function(m){return 'מתוך '+m[1]+' דרכים להושיב '+m[2]+' ילדים';}],
 [/^Broken by:\s*$/,function(){return 'מופר על ידי:';}],
 [/^Broken by: (.*)$/,function(m){return 'מופר על ידי: '+m[1];}],
 [/^must (not )?be in the (.+)$/,function(m){return (m[1]?'אסור להיות ':'חובה להיות ')+(ZIN[m[2]]||m[2]);}],
 [/^must sit in (.+)$/,function(m){return 'חובה לשבת ב'+m[1];}],
 [/^the (front row|front two rows|middle rows|back two rows|back row|left column|middle columns|right column)$/,function(m){return D(m[1]);}],
 [/^row (\d+) \(front\), any chair$/,function(m){return 'שורה '+m[1]+' (קדמית), כל כיסא';}],
 [/^row (\d+) \(back\), any chair$/,function(m){return 'שורה '+m[1]+' (אחורית), כל כיסא';}],
 [/^row (\d+), any chair$/,function(m){return 'שורה '+m[1]+', כל כיסא';}],
 [/^column (\d+), any row$/,function(m){return 'עמודה '+m[1]+', כל שורה';}],
 [/^row (\d+), column (\d+)$/,function(m){return 'שורה '+m[1]+', עמודה '+m[2];}],
 [/^row 1 \(front\)$/,function(){return 'שורה 1 (קדמית)';}],
 [/^rows 1 to (\d+)$/,function(m){return 'שורות 1 עד '+m[1];}],
 [/^not to sit next to (.+?)(?: \((.+)\))?$/,function(m){return 'לא לשבת ליד '+m[1]+(m[2]?' ('+(MODES[m[2]]||m[2])+')':'');}],
 [/^sits at row (\d+), column (\d+)$/,function(m){return 'יושב בשורה '+m[1]+', עמודה '+m[2];}],
 [/^([\d,.\s]+) with your pinned kids kept where they are( \(try unpinning one\))?$/,function(m){return m[1]+' כשהילדים המוצמדים נשארים במקומם'+(m[2]?' (נסו לבטל הצמדה של אחד)':'');}],
 [/^Row (\d+)$/,function(m){return 'שורה '+m[1];}],
 [/^(\d+) \(front\)$/,function(m){return m[1]+' (קדמית)';}],
 [/^(\d+) \(back\)$/,function(m){return m[1]+' (אחורית)';}],
 [/^Line (\d+) · 20\/(\d+)$/,function(m){return 'שורה '+m[1]+' · 20/'+m[2];}],
 [/^Row (\d+) of (\d+), column (\d+) of (\d+), (.*)$/,function(m){return 'שורה '+m[1]+' מתוך '+m[2]+', עמודה '+m[3]+' מתוך '+m[4]+', '+(m[5]==='empty'?'ריק':ariaTail(m[5]));}],
 [/^No desk at row (\d+), column (\d+)\. Press to add a desk$/,function(m){return 'אין שולחן בשורה '+m[1]+', עמודה '+m[2]+'. לחצו כדי להוסיף שולחן';}],
 [/^Board to front row \((m|tiles)\)$/,function(m){return 'מהלוח לשורה הקדמית ('+(m[1]==='m'?'מטר':'אריחים')+')';}],
 [/^Space between rows \((m|tiles)\)$/,function(m){return 'רווח בין שורות ('+(m[1]==='m'?'מטר':'אריחים')+')';}],
 [/^Estimated acuity:$/,function(){return 'חדות ראייה משוערת:';}],
 [/^\. The chart size is not entered, so this assumes the printed size\.$/,function(){return '. גודל הטבלה לא הוזן, אז זה מניח את הגודל המודפס.';}],
 [/^Distance: about ([\d.]+) m\.$/,function(m){return 'מרחק: כ-'+m[1]+' מטר.';}],
 [/^Read line (\d+) \(20\/(\d+) on the chart\) from (.+)$/,function(m){return 'קרא שורה '+m[1]+' (20/'+m[2]+' בטבלה) ממרחק '+unitsHe(m[3]);}],
 [/^tested: (.+)$/,function(m){return 'נבדקו: '+m[1].replace('both eyes','שתי העיניים').replace('right','ימין').replace('left','שמאל');}],
 [/^Fine up to row (\d+)$/,function(m){return 'סביר עד שורה '+m[1];}],
 [/^Now in row (\d+)$/,function(m){return 'כעת בשורה '+m[1];}],
 [/^Now in row (\d+): (Easy|Fine|Hard|Very hard|Can’t read) to read the board$/,function(m){return 'כעת בשורה '+m[1]+': '+LV[m[2]]+' לקרוא את הלוח';}],
 [/^Now in row (\d+), column (\d+)$/,function(m){return 'כעת בשורה '+m[1]+', עמודה '+m[2];}],
 [/^Currently next to (.+)$/,function(m){return 'כרגע ליד '+m[1];}],
 [/^Add a want: (front row|rows 1 to (\d+))$/,function(m){return 'הוספת בקשה: '+(m[2]?'שורות 1 עד '+m[2]:'השורה הקדמית');}],
 [/^, from the reason “(.+)”\.$/,function(m){return ', בגלל הסיבה "'+(HW[m[1]]||m[1])+'".';}],
 [/^\. Your note mentions a (health or accessibility need|focus or behavior concern) \(the reason alone suggests (Must|High|Medium|Low)\)\.$/,function(m){return '. ההערה שלכם מזכירה '+(m[1][0]==='h'?'צורך בריאותי או נגישות':'בעיית ריכוז או התנהגות')+' (הסיבה לבדה מציעה '+PRIS[m[2]]+').';}],
 [/^Use (Must|High|Medium|Low)$/,function(m){return 'השתמשו ב'+PRIS[m[1]];}],
 [/^Suggests (Must|High|Medium|Low)$/,function(m){return 'מציע '+PRIS[m[1]];}],
 [/^Eyes: (.+) · (Easy|Fine|Hard|Very hard|Can’t read) to read the board from here$/,function(m){return 'ראייה: '+m[1]+' · '+LV[m[2]]+' לקרוא את הלוח מכאן';}],
 [/^Eye test (20\/\d+)$/,function(m){return 'בדיקת ראייה '+m[1];}],
 [/^Wants (.+?)( · .*)?$/,function(m){return 'מעדיף/ה '+tw(m[1])+(m[2]?' · '+tail('x'+m[2]).slice(1).replace(/^ · /,''):'');}],
 [/^(.+?) wants (.+?)( · .*)?$/,function(m){return m[1]+' מעדיף/ה '+tw(m[2])+(m[3]?' · '+tail('x'+m[3]).slice(1).replace(/^ · /,''):'');}],
 [/^, not met: (.+)$/,function(m){return ', לא מתקיים: '+m[1];}],
 [/^, breaks a rule$/,function(){return ', מפר כלל';}],
 [/^\(not met\)$/,function(){return '(לא מתקיים)';}],
 [/^Added a want for (.+)$/,function(m){return 'נוספה בקשה עבור '+m[1];}],
 [/^Updated the want for (.+)$/,function(m){return 'הבקשה של '+m[1]+' עודכנה';}],
 [/^Removed the want for (.+)$/,function(m){return 'הבקשה של '+m[1]+' הוסרה';}],
 [/^Saved an eye test for (.+)$/,function(m){return 'נשמרה בדיקת ראייה עבור '+m[1];}],
 [/^Updated the eye test for (.+)$/,function(m){return 'בדיקת הראייה של '+m[1]+' עודכנה';}],
 [/^Removed the eye test for (.+)$/,function(m){return 'בדיקת הראייה של '+m[1]+' הוסרה';}],
 [/^(.+) already has that want\. Use Edit on it instead\.$/,function(m){return 'כבר יש בקשה כזו עבור '+m[1]+'. השתמשו בעריכה.';}],
 [/^Pick which kid (.+) should not sit next to\.$/,function(m){return 'בחרו ליד איזה ילד '+m[1]+' לא צריך לשבת.';}],
 [/^Set (.+) to (Must|High|Medium|Low)$/,function(m){return 'העדיפות של '+m[1]+' שונתה ל'+PRIS[m[2]];}],
 [/^Applied the suggested priority to (\d+) wants?$/,function(m){return 'הוחלה העדיפות המומלצת על '+m[1]+(m[1]==='1'?' בקשה':' בקשות');}],
 [/^(.+) can read the board comfortably from every row\.$/,function(m){return m[1]+' יכול/ה לקרוא את הלוח בנוחות מכל שורה.';}],
 [/^Added a (Must|High|Medium|Low) want: (.+) in (.+)\. Change its priority on the Wants tab\.$/,function(m){return 'נוספה בקשה בעדיפות '+PRIS[m[1]]+': '+m[2]+' ב'+tw(m[3]).replace(/^שורות/,'שורות')+'. אפשר לשנות את העדיפות בלשונית בקשות.';}],
 [/^Added (\d+) plans?\.$/,function(m){return 'נוספו '+m[1]+' תוכניות.';}],
 [/^Only (\d+) different valid plans found\. Added them\.$/,function(m){return 'נמצאו רק '+m[1]+' תוכניות תקינות שונות. הן נוספו.';}],
 [/^Saved “(.+)” in Plans$/,function(m){return 'נשמרה "'+pn(m[1])+'" בתוכניות';}],
 [/^Loaded “(.+)”$/,function(m){return 'נטענה "'+pn(m[1])+'"';}],
 [/^Saved (.+\.(?:png|json))$/,function(m){return 'נשמר '+m[1];}],
 [/^Arranged\. Not met: (.+)\.$/,function(m){return 'סודר. לא התמלאו: '+m[1].replace(/ not next to /g,' לא ליד ').replace(/\((Must|High|Medium|Low)\)/g,function(_,p){return '('+PRIS[p]+')';}).replace(/ and (\d+) more/,' ועוד $1')+'.';}],
 [/^No seating meets every rule\. It works if you turn off: (.+)$/,function(m){return 'אין הושבה שמקיימת את כל הכללים. זה אפשרי אם תכבו: '+m[1];}],
 [/^Removed (.+)$/,function(m){return 'הוסר: '+m[1];}],
 [/^Added (.+)$/,function(m){return 'נוסף: '+m[1];}],
 [/^(Pin|Unpin) (.+)$/,function(m){return (m[1]==='Pin'?'הצמדת ':'ביטול הצמדת ')+m[2];}],
 [/^Remove (.+)$/,function(m){return 'הסרת '+m[1];}],
 [/^Set (\d+)$/,function(m){return 'סט '+m[1];}],
 [/^Fixed seat: (.+)$/,function(m){return 'מקום קבוע: '+m[1];}]
];
var HW={'Health, sight or hearing':'בריאות, ראייה או שמיעה','Focus or distraction':'ריכוז או הסחת דעת','Behavior support':'תמיכה התנהגותית','Doesn’t get along':'לא מסתדר','Friends or social':'חברים או חברתי','Just prefers it':'פשוט מעדיף','Other':'אחר'};
function tail(rest){ // " · Must · Why · note (not met)"
  return rest.split(' · ').map(function(x,i){
    if(i===0)return x;
    x=x.trim();
    var st='';
    var mm=/^(.*?)\s*\((not met|met)\)$/.exec(x);
    if(mm){x=mm[1];st=mm[2]==='met'?' (מתקיים)':' (לא מתקיים)';}
    var core=PRIS[x]||HW[x]||x.replace(/^Eye test (20\/\d+)$/,function(_,a){return 'בדיקת ראייה '+a;});
    return core+st;
  }).join(' · ');
}
function unitsHe(t){return t.replace(/ ft\b/g,' רגל').replace(/ tiles?\b/g,function(x){return x===' tile'?' אריח':' אריחים';}).replace(/\((\S+) m\)/g,'($1 מטר)').replace(/ m$/,' מטר');}
function ariaTail(t){
  return t.replace(/, breaks a rule/,', מפר כלל').replace(/, not met: (.*)$/,function(_,l){
    return ', לא מתקיים: '+l.split('; ').map(function(x){return x.replace(/^(.*?) ?wants (.+)$/,function(_,a,b){return a+' מעדיף/ה '+tw(b);});}).join('; ');
  });
}
function pn(x){return x.replace(/^Plan (\d+)$/,'תוכנית $1');}
function tw(t){ // translate a want target phrase
  var out=null;
  R.forEach(function(r){if(out===null&&/row|column|the |not to/.test(t)){var m=r[0].exec(t);if(m&&/^(the |row|column|rows|not to)/.test(t))out=r[1](m);}});
  return out===null?t:out;
}
for(var k in MODES)M[k]=MODES[k];
for(var z in ZDEF)M[z]=ZDEF[z];
I18N.add(M,R);
})();
