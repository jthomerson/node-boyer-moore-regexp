// Generated from src/pcre/PCRE.g4 by ANTLR 4.5.1
// jshint ignore: start
var antlr4 = require('antlr4/index');


var serializedATN = ["\u0003\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\u0002\u007f\u0268\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004",
    "\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t",
    "\u0007\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004",
    "\f\t\f\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010",
    "\t\u0010\u0004\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013",
    "\u0004\u0014\t\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017",
    "\t\u0017\u0004\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a",
    "\u0004\u001b\t\u001b\u0004\u001c\t\u001c\u0004\u001d\t\u001d\u0004\u001e",
    "\t\u001e\u0004\u001f\t\u001f\u0004 \t \u0004!\t!\u0004\"\t\"\u0004#",
    "\t#\u0004$\t$\u0004%\t%\u0004&\t&\u0004\'\t\'\u0004(\t(\u0004)\t)\u0004",
    "*\t*\u0004+\t+\u0004,\t,\u0004-\t-\u0004.\t.\u0004/\t/\u00040\t0\u0004",
    "1\t1\u00042\t2\u00043\t3\u00044\t4\u00045\t5\u00046\t6\u00047\t7\u0004",
    "8\t8\u00049\t9\u0004:\t:\u0004;\t;\u0004<\t<\u0004=\t=\u0004>\t>\u0004",
    "?\t?\u0004@\t@\u0004A\tA\u0004B\tB\u0004C\tC\u0004D\tD\u0004E\tE\u0004",
    "F\tF\u0004G\tG\u0004H\tH\u0004I\tI\u0004J\tJ\u0004K\tK\u0004L\tL\u0004",
    "M\tM\u0004N\tN\u0004O\tO\u0004P\tP\u0004Q\tQ\u0004R\tR\u0004S\tS\u0004",
    "T\tT\u0004U\tU\u0004V\tV\u0004W\tW\u0004X\tX\u0004Y\tY\u0004Z\tZ\u0004",
    "[\t[\u0004\\\t\\\u0004]\t]\u0004^\t^\u0004_\t_\u0004`\t`\u0004a\ta\u0004",
    "b\tb\u0004c\tc\u0004d\td\u0004e\te\u0004f\tf\u0004g\tg\u0004h\th\u0004",
    "i\ti\u0004j\tj\u0004k\tk\u0004l\tl\u0004m\tm\u0004n\tn\u0004o\to\u0004",
    "p\tp\u0004q\tq\u0004r\tr\u0004s\ts\u0004t\tt\u0004u\tu\u0004v\tv\u0004",
    "w\tw\u0004x\tx\u0004y\ty\u0004z\tz\u0004{\t{\u0004|\t|\u0004}\t}\u0004",
    "~\t~\u0004\u007f\t\u007f\u0004\u0080\t\u0080\u0004\u0081\t\u0081\u0004",
    "\u0082\t\u0082\u0004\u0083\t\u0083\u0004\u0084\t\u0084\u0003\u0002\u0003",
    "\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0007",
    "\u0003\u0111\n\u0003\f\u0003\u000e\u0003\u0114\u000b\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0005",
    "\u0003\u0005\u0003\u0005\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0007",
    "\u0003\u0007\u0003\u0007\u0003\b\u0003\b\u0003\b\u0003\t\u0003\t\u0003",
    "\t\u0003\n\u0003\n\u0003\n\u0003\u000b\u0003\u000b\u0003\f\u0003\f\u0003",
    "\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0006\f\u013a",
    "\n\f\r\f\u000e\f\u013b\u0003\f\u0003\f\u0005\f\u0140\n\f\u0003\r\u0003",
    "\r\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000f\u0003\u000f\u0003",
    "\u000f\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0011\u0003\u0011\u0003",
    "\u0011\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0013\u0003\u0013\u0003",
    "\u0013\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0003",
    "\u0014\u0003\u0014\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003",
    "\u0015\u0003\u0015\u0003\u0015\u0003\u0016\u0003\u0016\u0003\u0016\u0003",
    "\u0017\u0003\u0017\u0003\u0017\u0003\u0018\u0003\u0018\u0003\u0018\u0003",
    "\u0019\u0003\u0019\u0003\u0019\u0003\u001a\u0003\u001a\u0003\u001a\u0003",
    "\u001b\u0003\u001b\u0003\u001b\u0003\u001c\u0003\u001c\u0003\u001c\u0003",
    "\u001d\u0003\u001d\u0003\u001d\u0003\u001e\u0003\u001e\u0003\u001f\u0003",
    "\u001f\u0003 \u0003 \u0003!\u0003!\u0003\"\u0003\"\u0003\"\u0003\"\u0003",
    "\"\u0003\"\u0003\"\u0003\"\u0003\"\u0003#\u0003#\u0003#\u0003#\u0003",
    "#\u0003#\u0003#\u0003#\u0003#\u0003#\u0003$\u0003$\u0003%\u0003%\u0003",
    "&\u0003&\u0003\'\u0003\'\u0003(\u0003(\u0003)\u0003)\u0003*\u0003*\u0003",
    "*\u0003+\u0003+\u0003+\u0003,\u0003,\u0003,\u0003-\u0003-\u0003.\u0003",
    ".\u0003.\u0003/\u0003/\u0003/\u00030\u00030\u00030\u00031\u00031\u0003",
    "1\u00032\u00032\u00032\u00033\u00033\u00033\u00034\u00034\u00035\u0003",
    "5\u00036\u00036\u00037\u00037\u00038\u00038\u00039\u00039\u0003:\u0003",
    ":\u0003;\u0003;\u0003<\u0003<\u0003=\u0003=\u0003>\u0003>\u0003?\u0003",
    "?\u0003@\u0003@\u0003A\u0003A\u0003B\u0003B\u0003C\u0003C\u0003D\u0003",
    "D\u0003E\u0003E\u0003F\u0003F\u0003G\u0003G\u0003H\u0003H\u0003I\u0003",
    "I\u0003J\u0003J\u0003K\u0003K\u0003L\u0003L\u0003M\u0003M\u0003N\u0003",
    "N\u0003O\u0003O\u0003P\u0003P\u0003Q\u0003Q\u0003R\u0003R\u0003S\u0003",
    "S\u0003T\u0003T\u0003U\u0003U\u0003V\u0003V\u0003W\u0003W\u0003X\u0003",
    "X\u0003Y\u0003Y\u0003Z\u0003Z\u0003[\u0003[\u0003\\\u0003\\\u0003]\u0003",
    "]\u0003^\u0003^\u0003_\u0003_\u0003`\u0003`\u0003a\u0003a\u0003b\u0003",
    "b\u0003c\u0003c\u0003d\u0003d\u0003e\u0003e\u0003f\u0003f\u0003g\u0003",
    "g\u0003h\u0003h\u0003i\u0003i\u0003j\u0003j\u0003k\u0003k\u0003l\u0003",
    "l\u0003m\u0003m\u0003n\u0003n\u0003o\u0003o\u0003p\u0003p\u0003q\u0003",
    "q\u0003r\u0003r\u0003s\u0003s\u0003t\u0003t\u0003u\u0003u\u0003v\u0003",
    "v\u0003w\u0003w\u0003x\u0003x\u0003y\u0003y\u0003z\u0003z\u0003{\u0003",
    "{\u0003|\u0003|\u0003}\u0003}\u0003~\u0003~\u0003\u007f\u0003\u007f",
    "\u0006\u007f\u0258\n\u007f\r\u007f\u000e\u007f\u0259\u0003\u0080\u0006",
    "\u0080\u025d\n\u0080\r\u0080\u000e\u0080\u025e\u0003\u0081\u0003\u0081",
    "\u0003\u0082\u0003\u0082\u0003\u0083\u0003\u0083\u0003\u0084\u0003\u0084",
    "\u0003\u0112\u0002\u0085\u0003\u0003\u0005\u0004\u0007\u0005\t\u0006",
    "\u000b\u0007\r\b\u000f\t\u0011\n\u0013\u000b\u0015\f\u0017\r\u0019\u000e",
    "\u001b\u000f\u001d\u0010\u001f\u0011!\u0012#\u0013%\u0014\'\u0015)\u0016",
    "+\u0017-\u0018/\u00191\u001a3\u001b5\u001c7\u001d9\u001e;\u001f= ?!",
    "A\"C#E$G%I&K\'M(O)Q*S+U,W-Y.[/]0_1a2c3e4g5i6k7m8o9q:s;u<w=y>{?}@\u007f",
    "A\u0081B\u0083C\u0085D\u0087E\u0089F\u008bG\u008dH\u008fI\u0091J\u0093",
    "K\u0095L\u0097M\u0099N\u009bO\u009dP\u009fQ\u00a1R\u00a3S\u00a5T\u00a7",
    "U\u00a9V\u00abW\u00adX\u00afY\u00b1Z\u00b3[\u00b5\\\u00b7]\u00b9^\u00bb",
    "_\u00bd`\u00bfa\u00c1b\u00c3c\u00c5d\u00c7e\u00c9f\u00cbg\u00cdh\u00cf",
    "i\u00d1j\u00d3k\u00d5l\u00d7m\u00d9n\u00dbo\u00ddp\u00dfq\u00e1r\u00e3",
    "s\u00e5t\u00e7u\u00e9v\u00ebw\u00edx\u00efy\u00f1z\u00f3{\u00f5|\u00f7",
    "}\u00f9~\u00fb\u007f\u00fd\u0002\u00ff\u0002\u0101\u0002\u0103\u0002",
    "\u0105\u0002\u0107\u0002\u0003\u0002\u0005\u0005\u00022;C\\c|\u0005",
    "\u00022;CHch\u0003\u0002\u0002\u0081\u0267\u0002\u0003\u0003\u0002\u0002",
    "\u0002\u0002\u0005\u0003\u0002\u0002\u0002\u0002\u0007\u0003\u0002\u0002",
    "\u0002\u0002\t\u0003\u0002\u0002\u0002\u0002\u000b\u0003\u0002\u0002",
    "\u0002\u0002\r\u0003\u0002\u0002\u0002\u0002\u000f\u0003\u0002\u0002",
    "\u0002\u0002\u0011\u0003\u0002\u0002\u0002\u0002\u0013\u0003\u0002\u0002",
    "\u0002\u0002\u0015\u0003\u0002\u0002\u0002\u0002\u0017\u0003\u0002\u0002",
    "\u0002\u0002\u0019\u0003\u0002\u0002\u0002\u0002\u001b\u0003\u0002\u0002",
    "\u0002\u0002\u001d\u0003\u0002\u0002\u0002\u0002\u001f\u0003\u0002\u0002",
    "\u0002\u0002!\u0003\u0002\u0002\u0002\u0002#\u0003\u0002\u0002\u0002",
    "\u0002%\u0003\u0002\u0002\u0002\u0002\'\u0003\u0002\u0002\u0002\u0002",
    ")\u0003\u0002\u0002\u0002\u0002+\u0003\u0002\u0002\u0002\u0002-\u0003",
    "\u0002\u0002\u0002\u0002/\u0003\u0002\u0002\u0002\u00021\u0003\u0002",
    "\u0002\u0002\u00023\u0003\u0002\u0002\u0002\u00025\u0003\u0002\u0002",
    "\u0002\u00027\u0003\u0002\u0002\u0002\u00029\u0003\u0002\u0002\u0002",
    "\u0002;\u0003\u0002\u0002\u0002\u0002=\u0003\u0002\u0002\u0002\u0002",
    "?\u0003\u0002\u0002\u0002\u0002A\u0003\u0002\u0002\u0002\u0002C\u0003",
    "\u0002\u0002\u0002\u0002E\u0003\u0002\u0002\u0002\u0002G\u0003\u0002",
    "\u0002\u0002\u0002I\u0003\u0002\u0002\u0002\u0002K\u0003\u0002\u0002",
    "\u0002\u0002M\u0003\u0002\u0002\u0002\u0002O\u0003\u0002\u0002\u0002",
    "\u0002Q\u0003\u0002\u0002\u0002\u0002S\u0003\u0002\u0002\u0002\u0002",
    "U\u0003\u0002\u0002\u0002\u0002W\u0003\u0002\u0002\u0002\u0002Y\u0003",
    "\u0002\u0002\u0002\u0002[\u0003\u0002\u0002\u0002\u0002]\u0003\u0002",
    "\u0002\u0002\u0002_\u0003\u0002\u0002\u0002\u0002a\u0003\u0002\u0002",
    "\u0002\u0002c\u0003\u0002\u0002\u0002\u0002e\u0003\u0002\u0002\u0002",
    "\u0002g\u0003\u0002\u0002\u0002\u0002i\u0003\u0002\u0002\u0002\u0002",
    "k\u0003\u0002\u0002\u0002\u0002m\u0003\u0002\u0002\u0002\u0002o\u0003",
    "\u0002\u0002\u0002\u0002q\u0003\u0002\u0002\u0002\u0002s\u0003\u0002",
    "\u0002\u0002\u0002u\u0003\u0002\u0002\u0002\u0002w\u0003\u0002\u0002",
    "\u0002\u0002y\u0003\u0002\u0002\u0002\u0002{\u0003\u0002\u0002\u0002",
    "\u0002}\u0003\u0002\u0002\u0002\u0002\u007f\u0003\u0002\u0002\u0002",
    "\u0002\u0081\u0003\u0002\u0002\u0002\u0002\u0083\u0003\u0002\u0002\u0002",
    "\u0002\u0085\u0003\u0002\u0002\u0002\u0002\u0087\u0003\u0002\u0002\u0002",
    "\u0002\u0089\u0003\u0002\u0002\u0002\u0002\u008b\u0003\u0002\u0002\u0002",
    "\u0002\u008d\u0003\u0002\u0002\u0002\u0002\u008f\u0003\u0002\u0002\u0002",
    "\u0002\u0091\u0003\u0002\u0002\u0002\u0002\u0093\u0003\u0002\u0002\u0002",
    "\u0002\u0095\u0003\u0002\u0002\u0002\u0002\u0097\u0003\u0002\u0002\u0002",
    "\u0002\u0099\u0003\u0002\u0002\u0002\u0002\u009b\u0003\u0002\u0002\u0002",
    "\u0002\u009d\u0003\u0002\u0002\u0002\u0002\u009f\u0003\u0002\u0002\u0002",
    "\u0002\u00a1\u0003\u0002\u0002\u0002\u0002\u00a3\u0003\u0002\u0002\u0002",
    "\u0002\u00a5\u0003\u0002\u0002\u0002\u0002\u00a7\u0003\u0002\u0002\u0002",
    "\u0002\u00a9\u0003\u0002\u0002\u0002\u0002\u00ab\u0003\u0002\u0002\u0002",
    "\u0002\u00ad\u0003\u0002\u0002\u0002\u0002\u00af\u0003\u0002\u0002\u0002",
    "\u0002\u00b1\u0003\u0002\u0002\u0002\u0002\u00b3\u0003\u0002\u0002\u0002",
    "\u0002\u00b5\u0003\u0002\u0002\u0002\u0002\u00b7\u0003\u0002\u0002\u0002",
    "\u0002\u00b9\u0003\u0002\u0002\u0002\u0002\u00bb\u0003\u0002\u0002\u0002",
    "\u0002\u00bd\u0003\u0002\u0002\u0002\u0002\u00bf\u0003\u0002\u0002\u0002",
    "\u0002\u00c1\u0003\u0002\u0002\u0002\u0002\u00c3\u0003\u0002\u0002\u0002",
    "\u0002\u00c5\u0003\u0002\u0002\u0002\u0002\u00c7\u0003\u0002\u0002\u0002",
    "\u0002\u00c9\u0003\u0002\u0002\u0002\u0002\u00cb\u0003\u0002\u0002\u0002",
    "\u0002\u00cd\u0003\u0002\u0002\u0002\u0002\u00cf\u0003\u0002\u0002\u0002",
    "\u0002\u00d1\u0003\u0002\u0002\u0002\u0002\u00d3\u0003\u0002\u0002\u0002",
    "\u0002\u00d5\u0003\u0002\u0002\u0002\u0002\u00d7\u0003\u0002\u0002\u0002",
    "\u0002\u00d9\u0003\u0002\u0002\u0002\u0002\u00db\u0003\u0002\u0002\u0002",
    "\u0002\u00dd\u0003\u0002\u0002\u0002\u0002\u00df\u0003\u0002\u0002\u0002",
    "\u0002\u00e1\u0003\u0002\u0002\u0002\u0002\u00e3\u0003\u0002\u0002\u0002",
    "\u0002\u00e5\u0003\u0002\u0002\u0002\u0002\u00e7\u0003\u0002\u0002\u0002",
    "\u0002\u00e9\u0003\u0002\u0002\u0002\u0002\u00eb\u0003\u0002\u0002\u0002",
    "\u0002\u00ed\u0003\u0002\u0002\u0002\u0002\u00ef\u0003\u0002\u0002\u0002",
    "\u0002\u00f1\u0003\u0002\u0002\u0002\u0002\u00f3\u0003\u0002\u0002\u0002",
    "\u0002\u00f5\u0003\u0002\u0002\u0002\u0002\u00f7\u0003\u0002\u0002\u0002",
    "\u0002\u00f9\u0003\u0002\u0002\u0002\u0002\u00fb\u0003\u0002\u0002\u0002",
    "\u0003\u0109\u0003\u0002\u0002\u0002\u0005\u010c\u0003\u0002\u0002\u0002",
    "\u0007\u0118\u0003\u0002\u0002\u0002\t\u011b\u0003\u0002\u0002\u0002",
    "\u000b\u011e\u0003\u0002\u0002\u0002\r\u0121\u0003\u0002\u0002\u0002",
    "\u000f\u0124\u0003\u0002\u0002\u0002\u0011\u0127\u0003\u0002\u0002\u0002",
    "\u0013\u012a\u0003\u0002\u0002\u0002\u0015\u012d\u0003\u0002\u0002\u0002",
    "\u0017\u012f\u0003\u0002\u0002\u0002\u0019\u0141\u0003\u0002\u0002\u0002",
    "\u001b\u0143\u0003\u0002\u0002\u0002\u001d\u0146\u0003\u0002\u0002\u0002",
    "\u001f\u0149\u0003\u0002\u0002\u0002!\u014c\u0003\u0002\u0002\u0002",
    "#\u014f\u0003\u0002\u0002\u0002%\u0152\u0003\u0002\u0002\u0002\'\u0155",
    "\u0003\u0002\u0002\u0002)\u015c\u0003\u0002\u0002\u0002+\u0163\u0003",
    "\u0002\u0002\u0002-\u0166\u0003\u0002\u0002\u0002/\u0169\u0003\u0002",
    "\u0002\u00021\u016c\u0003\u0002\u0002\u00023\u016f\u0003\u0002\u0002",
    "\u00025\u0172\u0003\u0002\u0002\u00027\u0175\u0003\u0002\u0002\u0002",
    "9\u0178\u0003\u0002\u0002\u0002;\u017b\u0003\u0002\u0002\u0002=\u017d",
    "\u0003\u0002\u0002\u0002?\u017f\u0003\u0002\u0002\u0002A\u0181\u0003",
    "\u0002\u0002\u0002C\u0183\u0003\u0002\u0002\u0002E\u018c\u0003\u0002",
    "\u0002\u0002G\u0196\u0003\u0002\u0002\u0002I\u0198\u0003\u0002\u0002",
    "\u0002K\u019a\u0003\u0002\u0002\u0002M\u019c\u0003\u0002\u0002\u0002",
    "O\u019e\u0003\u0002\u0002\u0002Q\u01a0\u0003\u0002\u0002\u0002S\u01a2",
    "\u0003\u0002\u0002\u0002U\u01a5\u0003\u0002\u0002\u0002W\u01a8\u0003",
    "\u0002\u0002\u0002Y\u01ab\u0003\u0002\u0002\u0002[\u01ad\u0003\u0002",
    "\u0002\u0002]\u01b0\u0003\u0002\u0002\u0002_\u01b3\u0003\u0002\u0002",
    "\u0002a\u01b6\u0003\u0002\u0002\u0002c\u01b9\u0003\u0002\u0002\u0002",
    "e\u01bc\u0003\u0002\u0002\u0002g\u01bf\u0003\u0002\u0002\u0002i\u01c1",
    "\u0003\u0002\u0002\u0002k\u01c3\u0003\u0002\u0002\u0002m\u01c5\u0003",
    "\u0002\u0002\u0002o\u01c7\u0003\u0002\u0002\u0002q\u01c9\u0003\u0002",
    "\u0002\u0002s\u01cb\u0003\u0002\u0002\u0002u\u01cd\u0003\u0002\u0002",
    "\u0002w\u01cf\u0003\u0002\u0002\u0002y\u01d1\u0003\u0002\u0002\u0002",
    "{\u01d3\u0003\u0002\u0002\u0002}\u01d5\u0003\u0002\u0002\u0002\u007f",
    "\u01d7\u0003\u0002\u0002\u0002\u0081\u01d9\u0003\u0002\u0002\u0002\u0083",
    "\u01db\u0003\u0002\u0002\u0002\u0085\u01dd\u0003\u0002\u0002\u0002\u0087",
    "\u01df\u0003\u0002\u0002\u0002\u0089\u01e1\u0003\u0002\u0002\u0002\u008b",
    "\u01e3\u0003\u0002\u0002\u0002\u008d\u01e5\u0003\u0002\u0002\u0002\u008f",
    "\u01e7\u0003\u0002\u0002\u0002\u0091\u01e9\u0003\u0002\u0002\u0002\u0093",
    "\u01eb\u0003\u0002\u0002\u0002\u0095\u01ed\u0003\u0002\u0002\u0002\u0097",
    "\u01ef\u0003\u0002\u0002\u0002\u0099\u01f1\u0003\u0002\u0002\u0002\u009b",
    "\u01f3\u0003\u0002\u0002\u0002\u009d\u01f5\u0003\u0002\u0002\u0002\u009f",
    "\u01f7\u0003\u0002\u0002\u0002\u00a1\u01f9\u0003\u0002\u0002\u0002\u00a3",
    "\u01fb\u0003\u0002\u0002\u0002\u00a5\u01fd\u0003\u0002\u0002\u0002\u00a7",
    "\u01ff\u0003\u0002\u0002\u0002\u00a9\u0201\u0003\u0002\u0002\u0002\u00ab",
    "\u0203\u0003\u0002\u0002\u0002\u00ad\u0205\u0003\u0002\u0002\u0002\u00af",
    "\u0207\u0003\u0002\u0002\u0002\u00b1\u0209\u0003\u0002\u0002\u0002\u00b3",
    "\u020b\u0003\u0002\u0002\u0002\u00b5\u020d\u0003\u0002\u0002\u0002\u00b7",
    "\u020f\u0003\u0002\u0002\u0002\u00b9\u0211\u0003\u0002\u0002\u0002\u00bb",
    "\u0213\u0003\u0002\u0002\u0002\u00bd\u0215\u0003\u0002\u0002\u0002\u00bf",
    "\u0217\u0003\u0002\u0002\u0002\u00c1\u0219\u0003\u0002\u0002\u0002\u00c3",
    "\u021b\u0003\u0002\u0002\u0002\u00c5\u021d\u0003\u0002\u0002\u0002\u00c7",
    "\u021f\u0003\u0002\u0002\u0002\u00c9\u0221\u0003\u0002\u0002\u0002\u00cb",
    "\u0223\u0003\u0002\u0002\u0002\u00cd\u0225\u0003\u0002\u0002\u0002\u00cf",
    "\u0227\u0003\u0002\u0002\u0002\u00d1\u0229\u0003\u0002\u0002\u0002\u00d3",
    "\u022b\u0003\u0002\u0002\u0002\u00d5\u022d\u0003\u0002\u0002\u0002\u00d7",
    "\u022f\u0003\u0002\u0002\u0002\u00d9\u0231\u0003\u0002\u0002\u0002\u00db",
    "\u0233\u0003\u0002\u0002\u0002\u00dd\u0235\u0003\u0002\u0002\u0002\u00df",
    "\u0237\u0003\u0002\u0002\u0002\u00e1\u0239\u0003\u0002\u0002\u0002\u00e3",
    "\u023b\u0003\u0002\u0002\u0002\u00e5\u023d\u0003\u0002\u0002\u0002\u00e7",
    "\u023f\u0003\u0002\u0002\u0002\u00e9\u0241\u0003\u0002\u0002\u0002\u00eb",
    "\u0243\u0003\u0002\u0002\u0002\u00ed\u0245\u0003\u0002\u0002\u0002\u00ef",
    "\u0247\u0003\u0002\u0002\u0002\u00f1\u0249\u0003\u0002\u0002\u0002\u00f3",
    "\u024b\u0003\u0002\u0002\u0002\u00f5\u024d\u0003\u0002\u0002\u0002\u00f7",
    "\u024f\u0003\u0002\u0002\u0002\u00f9\u0251\u0003\u0002\u0002\u0002\u00fb",
    "\u0253\u0003\u0002\u0002\u0002\u00fd\u0257\u0003\u0002\u0002\u0002\u00ff",
    "\u025c\u0003\u0002\u0002\u0002\u0101\u0260\u0003\u0002\u0002\u0002\u0103",
    "\u0262\u0003\u0002\u0002\u0002\u0105\u0264\u0003\u0002\u0002\u0002\u0107",
    "\u0266\u0003\u0002\u0002\u0002\u0109\u010a\u0007^\u0002\u0002\u010a",
    "\u010b\u0005\u0103\u0082\u0002\u010b\u0004\u0003\u0002\u0002\u0002\u010c",
    "\u010d\u0007^\u0002\u0002\u010d\u010e\u0007S\u0002\u0002\u010e\u0112",
    "\u0003\u0002\u0002\u0002\u010f\u0111\u000b\u0002\u0002\u0002\u0110\u010f",
    "\u0003\u0002\u0002\u0002\u0111\u0114\u0003\u0002\u0002\u0002\u0112\u0113",
    "\u0003\u0002\u0002\u0002\u0112\u0110\u0003\u0002\u0002\u0002\u0113\u0115",
    "\u0003\u0002\u0002\u0002\u0114\u0112\u0003\u0002\u0002\u0002\u0115\u0116",
    "\u0007^\u0002\u0002\u0116\u0117\u0007G\u0002\u0002\u0117\u0006\u0003",
    "\u0002\u0002\u0002\u0118\u0119\u0007^\u0002\u0002\u0119\u011a\u0007",
    "c\u0002\u0002\u011a\b\u0003\u0002\u0002\u0002\u011b\u011c\u0007^\u0002",
    "\u0002\u011c\u011d\u0007e\u0002\u0002\u011d\n\u0003\u0002\u0002\u0002",
    "\u011e\u011f\u0007^\u0002\u0002\u011f\u0120\u0007g\u0002\u0002\u0120",
    "\f\u0003\u0002\u0002\u0002\u0121\u0122\u0007^\u0002\u0002\u0122\u0123",
    "\u0007h\u0002\u0002\u0123\u000e\u0003\u0002\u0002\u0002\u0124\u0125",
    "\u0007^\u0002\u0002\u0125\u0126\u0007p\u0002\u0002\u0126\u0010\u0003",
    "\u0002\u0002\u0002\u0127\u0128\u0007^\u0002\u0002\u0128\u0129\u0007",
    "t\u0002\u0002\u0129\u0012\u0003\u0002\u0002\u0002\u012a\u012b\u0007",
    "^\u0002\u0002\u012b\u012c\u0007v\u0002\u0002\u012c\u0014\u0003\u0002",
    "\u0002\u0002\u012d\u012e\u0007^\u0002\u0002\u012e\u0016\u0003\u0002",
    "\u0002\u0002\u012f\u0130\u0007^\u0002\u0002\u0130\u0131\u0007z\u0002",
    "\u0002\u0131\u013f\u0003\u0002\u0002\u0002\u0132\u0133\u0005\u0105\u0083",
    "\u0002\u0133\u0134\u0005\u0105\u0083\u0002\u0134\u0140\u0003\u0002\u0002",
    "\u0002\u0135\u0136\u0007}\u0002\u0002\u0136\u0137\u0005\u0105\u0083",
    "\u0002\u0137\u0139\u0005\u0105\u0083\u0002\u0138\u013a\u0005\u0105\u0083",
    "\u0002\u0139\u0138\u0003\u0002\u0002\u0002\u013a\u013b\u0003\u0002\u0002",
    "\u0002\u013b\u0139\u0003\u0002\u0002\u0002\u013b\u013c\u0003\u0002\u0002",
    "\u0002\u013c\u013d\u0003\u0002\u0002\u0002\u013d\u013e\u0007\u007f\u0002",
    "\u0002\u013e\u0140\u0003\u0002\u0002\u0002\u013f\u0132\u0003\u0002\u0002",
    "\u0002\u013f\u0135\u0003\u0002\u0002\u0002\u0140\u0018\u0003\u0002\u0002",
    "\u0002\u0141\u0142\u00070\u0002\u0002\u0142\u001a\u0003\u0002\u0002",
    "\u0002\u0143\u0144\u0007^\u0002\u0002\u0144\u0145\u0007E\u0002\u0002",
    "\u0145\u001c\u0003\u0002\u0002\u0002\u0146\u0147\u0007^\u0002\u0002",
    "\u0147\u0148\u0007f\u0002\u0002\u0148\u001e\u0003\u0002\u0002\u0002",
    "\u0149\u014a\u0007^\u0002\u0002\u014a\u014b\u0007F\u0002\u0002\u014b",
    " \u0003\u0002\u0002\u0002\u014c\u014d\u0007^\u0002\u0002\u014d\u014e",
    "\u0007j\u0002\u0002\u014e\"\u0003\u0002\u0002\u0002\u014f\u0150\u0007",
    "^\u0002\u0002\u0150\u0151\u0007J\u0002\u0002\u0151$\u0003\u0002\u0002",
    "\u0002\u0152\u0153\u0007^\u0002\u0002\u0153\u0154\u0007P\u0002\u0002",
    "\u0154&\u0003\u0002\u0002\u0002\u0155\u0156\u0007^\u0002\u0002\u0156",
    "\u0157\u0007r\u0002\u0002\u0157\u0158\u0007}\u0002\u0002\u0158\u0159",
    "\u0003\u0002\u0002\u0002\u0159\u015a\u0005\u00fd\u007f\u0002\u015a\u015b",
    "\u0007\u007f\u0002\u0002\u015b(\u0003\u0002\u0002\u0002\u015c\u015d",
    "\u0007^\u0002\u0002\u015d\u015e\u0007R\u0002\u0002\u015e\u015f\u0007",
    "}\u0002\u0002\u015f\u0160\u0003\u0002\u0002\u0002\u0160\u0161\u0005",
    "\u00fd\u007f\u0002\u0161\u0162\u0007\u007f\u0002\u0002\u0162*\u0003",
    "\u0002\u0002\u0002\u0163\u0164\u0007^\u0002\u0002\u0164\u0165\u0007",
    "T\u0002\u0002\u0165,\u0003\u0002\u0002\u0002\u0166\u0167\u0007^\u0002",
    "\u0002\u0167\u0168\u0007u\u0002\u0002\u0168.\u0003\u0002\u0002\u0002",
    "\u0169\u016a\u0007^\u0002\u0002\u016a\u016b\u0007U\u0002\u0002\u016b",
    "0\u0003\u0002\u0002\u0002\u016c\u016d\u0007^\u0002\u0002\u016d\u016e",
    "\u0007x\u0002\u0002\u016e2\u0003\u0002\u0002\u0002\u016f\u0170\u0007",
    "^\u0002\u0002\u0170\u0171\u0007X\u0002\u0002\u01714\u0003\u0002\u0002",
    "\u0002\u0172\u0173\u0007^\u0002\u0002\u0173\u0174\u0007y\u0002\u0002",
    "\u01746\u0003\u0002\u0002\u0002\u0175\u0176\u0007^\u0002\u0002\u0176",
    "\u0177\u0007Y\u0002\u0002\u01778\u0003\u0002\u0002\u0002\u0178\u0179",
    "\u0007^\u0002\u0002\u0179\u017a\u0007Z\u0002\u0002\u017a:\u0003\u0002",
    "\u0002\u0002\u017b\u017c\u0007]\u0002\u0002\u017c<\u0003\u0002\u0002",
    "\u0002\u017d\u017e\u0007_\u0002\u0002\u017e>\u0003\u0002\u0002\u0002",
    "\u017f\u0180\u0007`\u0002\u0002\u0180@\u0003\u0002\u0002\u0002\u0181",
    "\u0182\u0007/\u0002\u0002\u0182B\u0003\u0002\u0002\u0002\u0183\u0184",
    "\u0007]\u0002\u0002\u0184\u0185\u0007]\u0002\u0002\u0185\u0186\u0007",
    "<\u0002\u0002\u0186\u0187\u0003\u0002\u0002\u0002\u0187\u0188\u0005",
    "\u00ff\u0080\u0002\u0188\u0189\u0007<\u0002\u0002\u0189\u018a\u0007",
    "_\u0002\u0002\u018a\u018b\u0007_\u0002\u0002\u018bD\u0003\u0002\u0002",
    "\u0002\u018c\u018d\u0007]\u0002\u0002\u018d\u018e\u0007]\u0002\u0002",
    "\u018e\u018f\u0007<\u0002\u0002\u018f\u0190\u0007`\u0002\u0002\u0190",
    "\u0191\u0003\u0002\u0002\u0002\u0191\u0192\u0005\u00ff\u0080\u0002\u0192",
    "\u0193\u0007<\u0002\u0002\u0193\u0194\u0007_\u0002\u0002\u0194\u0195",
    "\u0007_\u0002\u0002\u0195F\u0003\u0002\u0002\u0002\u0196\u0197\u0007",
    "A\u0002\u0002\u0197H\u0003\u0002\u0002\u0002\u0198\u0199\u0007-\u0002",
    "\u0002\u0199J\u0003\u0002\u0002\u0002\u019a\u019b\u0007,\u0002\u0002",
    "\u019bL\u0003\u0002\u0002\u0002\u019c\u019d\u0007}\u0002\u0002\u019d",
    "N\u0003\u0002\u0002\u0002\u019e\u019f\u0007\u007f\u0002\u0002\u019f",
    "P\u0003\u0002\u0002\u0002\u01a0\u01a1\u0007.\u0002\u0002\u01a1R\u0003",
    "\u0002\u0002\u0002\u01a2\u01a3\u0007^\u0002\u0002\u01a3\u01a4\u0007",
    "d\u0002\u0002\u01a4T\u0003\u0002\u0002\u0002\u01a5\u01a6\u0007^\u0002",
    "\u0002\u01a6\u01a7\u0007D\u0002\u0002\u01a7V\u0003\u0002\u0002\u0002",
    "\u01a8\u01a9\u0007^\u0002\u0002\u01a9\u01aa\u0007C\u0002\u0002\u01aa",
    "X\u0003\u0002\u0002\u0002\u01ab\u01ac\u0007&\u0002\u0002\u01acZ\u0003",
    "\u0002\u0002\u0002\u01ad\u01ae\u0007^\u0002\u0002\u01ae\u01af\u0007",
    "\\\u0002\u0002\u01af\\\u0003\u0002\u0002\u0002\u01b0\u01b1\u0007^\u0002",
    "\u0002\u01b1\u01b2\u0007|\u0002\u0002\u01b2^\u0003\u0002\u0002\u0002",
    "\u01b3\u01b4\u0007^\u0002\u0002\u01b4\u01b5\u0007I\u0002\u0002\u01b5",
    "`\u0003\u0002\u0002\u0002\u01b6\u01b7\u0007^\u0002\u0002\u01b7\u01b8",
    "\u0007M\u0002\u0002\u01b8b\u0003\u0002\u0002\u0002\u01b9\u01ba\u0007",
    "^\u0002\u0002\u01ba\u01bb\u0007i\u0002\u0002\u01bbd\u0003\u0002\u0002",
    "\u0002\u01bc\u01bd\u0007^\u0002\u0002\u01bd\u01be\u0007m\u0002\u0002",
    "\u01bef\u0003\u0002\u0002\u0002\u01bf\u01c0\u0007~\u0002\u0002\u01c0",
    "h\u0003\u0002\u0002\u0002\u01c1\u01c2\u0007*\u0002\u0002\u01c2j\u0003",
    "\u0002\u0002\u0002\u01c3\u01c4\u0007+\u0002\u0002\u01c4l\u0003\u0002",
    "\u0002\u0002\u01c5\u01c6\u0007>\u0002\u0002\u01c6n\u0003\u0002\u0002",
    "\u0002\u01c7\u01c8\u0007@\u0002\u0002\u01c8p\u0003\u0002\u0002\u0002",
    "\u01c9\u01ca\u0007)\u0002\u0002\u01car\u0003\u0002\u0002\u0002\u01cb",
    "\u01cc\u0007a\u0002\u0002\u01cct\u0003\u0002\u0002\u0002\u01cd\u01ce",
    "\u0007<\u0002\u0002\u01cev\u0003\u0002\u0002\u0002\u01cf\u01d0\u0007",
    "%\u0002\u0002\u01d0x\u0003\u0002\u0002\u0002\u01d1\u01d2\u0007?\u0002",
    "\u0002\u01d2z\u0003\u0002\u0002\u0002\u01d3\u01d4\u0007#\u0002\u0002",
    "\u01d4|\u0003\u0002\u0002\u0002\u01d5\u01d6\u0007(\u0002\u0002\u01d6",
    "~\u0003\u0002\u0002\u0002\u01d7\u01d8\u0007c\u0002\u0002\u01d8\u0080",
    "\u0003\u0002\u0002\u0002\u01d9\u01da\u0007d\u0002\u0002\u01da\u0082",
    "\u0003\u0002\u0002\u0002\u01db\u01dc\u0007e\u0002\u0002\u01dc\u0084",
    "\u0003\u0002\u0002\u0002\u01dd\u01de\u0007f\u0002\u0002\u01de\u0086",
    "\u0003\u0002\u0002\u0002\u01df\u01e0\u0007g\u0002\u0002\u01e0\u0088",
    "\u0003\u0002\u0002\u0002\u01e1\u01e2\u0007h\u0002\u0002\u01e2\u008a",
    "\u0003\u0002\u0002\u0002\u01e3\u01e4\u0007i\u0002\u0002\u01e4\u008c",
    "\u0003\u0002\u0002\u0002\u01e5\u01e6\u0007j\u0002\u0002\u01e6\u008e",
    "\u0003\u0002\u0002\u0002\u01e7\u01e8\u0007k\u0002\u0002\u01e8\u0090",
    "\u0003\u0002\u0002\u0002\u01e9\u01ea\u0007l\u0002\u0002\u01ea\u0092",
    "\u0003\u0002\u0002\u0002\u01eb\u01ec\u0007m\u0002\u0002\u01ec\u0094",
    "\u0003\u0002\u0002\u0002\u01ed\u01ee\u0007n\u0002\u0002\u01ee\u0096",
    "\u0003\u0002\u0002\u0002\u01ef\u01f0\u0007o\u0002\u0002\u01f0\u0098",
    "\u0003\u0002\u0002\u0002\u01f1\u01f2\u0007p\u0002\u0002\u01f2\u009a",
    "\u0003\u0002\u0002\u0002\u01f3\u01f4\u0007q\u0002\u0002\u01f4\u009c",
    "\u0003\u0002\u0002\u0002\u01f5\u01f6\u0007r\u0002\u0002\u01f6\u009e",
    "\u0003\u0002\u0002\u0002\u01f7\u01f8\u0007s\u0002\u0002\u01f8\u00a0",
    "\u0003\u0002\u0002\u0002\u01f9\u01fa\u0007t\u0002\u0002\u01fa\u00a2",
    "\u0003\u0002\u0002\u0002\u01fb\u01fc\u0007u\u0002\u0002\u01fc\u00a4",
    "\u0003\u0002\u0002\u0002\u01fd\u01fe\u0007v\u0002\u0002\u01fe\u00a6",
    "\u0003\u0002\u0002\u0002\u01ff\u0200\u0007w\u0002\u0002\u0200\u00a8",
    "\u0003\u0002\u0002\u0002\u0201\u0202\u0007x\u0002\u0002\u0202\u00aa",
    "\u0003\u0002\u0002\u0002\u0203\u0204\u0007y\u0002\u0002\u0204\u00ac",
    "\u0003\u0002\u0002\u0002\u0205\u0206\u0007z\u0002\u0002\u0206\u00ae",
    "\u0003\u0002\u0002\u0002\u0207\u0208\u0007{\u0002\u0002\u0208\u00b0",
    "\u0003\u0002\u0002\u0002\u0209\u020a\u0007|\u0002\u0002\u020a\u00b2",
    "\u0003\u0002\u0002\u0002\u020b\u020c\u0007C\u0002\u0002\u020c\u00b4",
    "\u0003\u0002\u0002\u0002\u020d\u020e\u0007D\u0002\u0002\u020e\u00b6",
    "\u0003\u0002\u0002\u0002\u020f\u0210\u0007E\u0002\u0002\u0210\u00b8",
    "\u0003\u0002\u0002\u0002\u0211\u0212\u0007F\u0002\u0002\u0212\u00ba",
    "\u0003\u0002\u0002\u0002\u0213\u0214\u0007G\u0002\u0002\u0214\u00bc",
    "\u0003\u0002\u0002\u0002\u0215\u0216\u0007H\u0002\u0002\u0216\u00be",
    "\u0003\u0002\u0002\u0002\u0217\u0218\u0007I\u0002\u0002\u0218\u00c0",
    "\u0003\u0002\u0002\u0002\u0219\u021a\u0007J\u0002\u0002\u021a\u00c2",
    "\u0003\u0002\u0002\u0002\u021b\u021c\u0007K\u0002\u0002\u021c\u00c4",
    "\u0003\u0002\u0002\u0002\u021d\u021e\u0007L\u0002\u0002\u021e\u00c6",
    "\u0003\u0002\u0002\u0002\u021f\u0220\u0007M\u0002\u0002\u0220\u00c8",
    "\u0003\u0002\u0002\u0002\u0221\u0222\u0007N\u0002\u0002\u0222\u00ca",
    "\u0003\u0002\u0002\u0002\u0223\u0224\u0007O\u0002\u0002\u0224\u00cc",
    "\u0003\u0002\u0002\u0002\u0225\u0226\u0007P\u0002\u0002\u0226\u00ce",
    "\u0003\u0002\u0002\u0002\u0227\u0228\u0007Q\u0002\u0002\u0228\u00d0",
    "\u0003\u0002\u0002\u0002\u0229\u022a\u0007R\u0002\u0002\u022a\u00d2",
    "\u0003\u0002\u0002\u0002\u022b\u022c\u0007S\u0002\u0002\u022c\u00d4",
    "\u0003\u0002\u0002\u0002\u022d\u022e\u0007T\u0002\u0002\u022e\u00d6",
    "\u0003\u0002\u0002\u0002\u022f\u0230\u0007U\u0002\u0002\u0230\u00d8",
    "\u0003\u0002\u0002\u0002\u0231\u0232\u0007V\u0002\u0002\u0232\u00da",
    "\u0003\u0002\u0002\u0002\u0233\u0234\u0007W\u0002\u0002\u0234\u00dc",
    "\u0003\u0002\u0002\u0002\u0235\u0236\u0007X\u0002\u0002\u0236\u00de",
    "\u0003\u0002\u0002\u0002\u0237\u0238\u0007Y\u0002\u0002\u0238\u00e0",
    "\u0003\u0002\u0002\u0002\u0239\u023a\u0007Z\u0002\u0002\u023a\u00e2",
    "\u0003\u0002\u0002\u0002\u023b\u023c\u0007[\u0002\u0002\u023c\u00e4",
    "\u0003\u0002\u0002\u0002\u023d\u023e\u0007\\\u0002\u0002\u023e\u00e6",
    "\u0003\u0002\u0002\u0002\u023f\u0240\u00073\u0002\u0002\u0240\u00e8",
    "\u0003\u0002\u0002\u0002\u0241\u0242\u00074\u0002\u0002\u0242\u00ea",
    "\u0003\u0002\u0002\u0002\u0243\u0244\u00075\u0002\u0002\u0244\u00ec",
    "\u0003\u0002\u0002\u0002\u0245\u0246\u00076\u0002\u0002\u0246\u00ee",
    "\u0003\u0002\u0002\u0002\u0247\u0248\u00077\u0002\u0002\u0248\u00f0",
    "\u0003\u0002\u0002\u0002\u0249\u024a\u00078\u0002\u0002\u024a\u00f2",
    "\u0003\u0002\u0002\u0002\u024b\u024c\u00079\u0002\u0002\u024c\u00f4",
    "\u0003\u0002\u0002\u0002\u024d\u024e\u0007:\u0002\u0002\u024e\u00f6",
    "\u0003\u0002\u0002\u0002\u024f\u0250\u0007;\u0002\u0002\u0250\u00f8",
    "\u0003\u0002\u0002\u0002\u0251\u0252\u00072\u0002\u0002\u0252\u00fa",
    "\u0003\u0002\u0002\u0002\u0253\u0254\u000b\u0002\u0002\u0002\u0254\u00fc",
    "\u0003\u0002\u0002\u0002\u0255\u0258\u0007a\u0002\u0002\u0256\u0258",
    "\u0005\u0101\u0081\u0002\u0257\u0255\u0003\u0002\u0002\u0002\u0257\u0256",
    "\u0003\u0002\u0002\u0002\u0258\u0259\u0003\u0002\u0002\u0002\u0259\u0257",
    "\u0003\u0002\u0002\u0002\u0259\u025a\u0003\u0002\u0002\u0002\u025a\u00fe",
    "\u0003\u0002\u0002\u0002\u025b\u025d\u0005\u0101\u0081\u0002\u025c\u025b",
    "\u0003\u0002\u0002\u0002\u025d\u025e\u0003\u0002\u0002\u0002\u025e\u025c",
    "\u0003\u0002\u0002\u0002\u025e\u025f\u0003\u0002\u0002\u0002\u025f\u0100",
    "\u0003\u0002\u0002\u0002\u0260\u0261\t\u0002\u0002\u0002\u0261\u0102",
    "\u0003\u0002\u0002\u0002\u0262\u0263\n\u0002\u0002\u0002\u0263\u0104",
    "\u0003\u0002\u0002\u0002\u0264\u0265\t\u0003\u0002\u0002\u0265\u0106",
    "\u0003\u0002\u0002\u0002\u0266\u0267\t\u0004\u0002\u0002\u0267\u0108",
    "\u0003\u0002\u0002\u0002\t\u0002\u0112\u013b\u013f\u0257\u0259\u025e",
    "\u0002"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

function PCRELexer(input) {
    antlr4.Lexer.call(this, input);
    this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    return this;
}

PCRELexer.prototype = Object.create(antlr4.Lexer.prototype);
PCRELexer.prototype.constructor = PCRELexer;

PCRELexer.EOF = antlr4.Token.EOF;
PCRELexer.Quoted = 1;
PCRELexer.BlockQuoted = 2;
PCRELexer.BellChar = 3;
PCRELexer.ControlChar = 4;
PCRELexer.EscapeChar = 5;
PCRELexer.FormFeed = 6;
PCRELexer.NewLine = 7;
PCRELexer.CarriageReturn = 8;
PCRELexer.Tab = 9;
PCRELexer.Backslash = 10;
PCRELexer.HexChar = 11;
PCRELexer.Dot = 12;
PCRELexer.OneDataUnit = 13;
PCRELexer.DecimalDigit = 14;
PCRELexer.NotDecimalDigit = 15;
PCRELexer.HorizontalWhiteSpace = 16;
PCRELexer.NotHorizontalWhiteSpace = 17;
PCRELexer.NotNewLine = 18;
PCRELexer.CharWithProperty = 19;
PCRELexer.CharWithoutProperty = 20;
PCRELexer.NewLineSequence = 21;
PCRELexer.WhiteSpace = 22;
PCRELexer.NotWhiteSpace = 23;
PCRELexer.VerticalWhiteSpace = 24;
PCRELexer.NotVerticalWhiteSpace = 25;
PCRELexer.WordChar = 26;
PCRELexer.NotWordChar = 27;
PCRELexer.ExtendedUnicodeChar = 28;
PCRELexer.CharacterClassStart = 29;
PCRELexer.CharacterClassEnd = 30;
PCRELexer.Caret = 31;
PCRELexer.Hyphen = 32;
PCRELexer.POSIXNamedSet = 33;
PCRELexer.POSIXNegatedNamedSet = 34;
PCRELexer.QuestionMark = 35;
PCRELexer.Plus = 36;
PCRELexer.Star = 37;
PCRELexer.OpenBrace = 38;
PCRELexer.CloseBrace = 39;
PCRELexer.Comma = 40;
PCRELexer.WordBoundary = 41;
PCRELexer.NonWordBoundary = 42;
PCRELexer.StartOfSubject = 43;
PCRELexer.EndOfSubjectOrLine = 44;
PCRELexer.EndOfSubjectOrLineEndOfSubject = 45;
PCRELexer.EndOfSubject = 46;
PCRELexer.PreviousMatchInSubject = 47;
PCRELexer.ResetStartMatch = 48;
PCRELexer.SubroutineOrNamedReferenceStartG = 49;
PCRELexer.NamedReferenceStartK = 50;
PCRELexer.Pipe = 51;
PCRELexer.OpenParen = 52;
PCRELexer.CloseParen = 53;
PCRELexer.LessThan = 54;
PCRELexer.GreaterThan = 55;
PCRELexer.SingleQuote = 56;
PCRELexer.Underscore = 57;
PCRELexer.Colon = 58;
PCRELexer.Hash = 59;
PCRELexer.Equals = 60;
PCRELexer.Exclamation = 61;
PCRELexer.Ampersand = 62;
PCRELexer.ALC = 63;
PCRELexer.BLC = 64;
PCRELexer.CLC = 65;
PCRELexer.DLC = 66;
PCRELexer.ELC = 67;
PCRELexer.FLC = 68;
PCRELexer.GLC = 69;
PCRELexer.HLC = 70;
PCRELexer.ILC = 71;
PCRELexer.JLC = 72;
PCRELexer.KLC = 73;
PCRELexer.LLC = 74;
PCRELexer.MLC = 75;
PCRELexer.NLC = 76;
PCRELexer.OLC = 77;
PCRELexer.PLC = 78;
PCRELexer.QLC = 79;
PCRELexer.RLC = 80;
PCRELexer.SLC = 81;
PCRELexer.TLC = 82;
PCRELexer.ULC = 83;
PCRELexer.VLC = 84;
PCRELexer.WLC = 85;
PCRELexer.XLC = 86;
PCRELexer.YLC = 87;
PCRELexer.ZLC = 88;
PCRELexer.AUC = 89;
PCRELexer.BUC = 90;
PCRELexer.CUC = 91;
PCRELexer.DUC = 92;
PCRELexer.EUC = 93;
PCRELexer.FUC = 94;
PCRELexer.GUC = 95;
PCRELexer.HUC = 96;
PCRELexer.IUC = 97;
PCRELexer.JUC = 98;
PCRELexer.KUC = 99;
PCRELexer.LUC = 100;
PCRELexer.MUC = 101;
PCRELexer.NUC = 102;
PCRELexer.OUC = 103;
PCRELexer.PUC = 104;
PCRELexer.QUC = 105;
PCRELexer.RUC = 106;
PCRELexer.SUC = 107;
PCRELexer.TUC = 108;
PCRELexer.UUC = 109;
PCRELexer.VUC = 110;
PCRELexer.WUC = 111;
PCRELexer.XUC = 112;
PCRELexer.YUC = 113;
PCRELexer.ZUC = 114;
PCRELexer.D1 = 115;
PCRELexer.D2 = 116;
PCRELexer.D3 = 117;
PCRELexer.D4 = 118;
PCRELexer.D5 = 119;
PCRELexer.D6 = 120;
PCRELexer.D7 = 121;
PCRELexer.D8 = 122;
PCRELexer.D9 = 123;
PCRELexer.D0 = 124;
PCRELexer.OtherChar = 125;


PCRELexer.modeNames = [ "DEFAULT_MODE" ];

PCRELexer.literalNames = [ 'null', 'null', 'null', "'\\a'", "'\\c'", "'\\e'",
                           "'\\f'", "'\\n'", "'\\r'", "'\\t'", "'\\'", 'null',
                           "'.'", "'\\C'", "'\\d'", "'\\D'", "'\\h'", "'\\H'",
                           "'\\N'", 'null', 'null', "'\\R'", "'\\s'", "'\\S'",
                           "'\\v'", "'\\V'", "'\\w'", "'\\W'", "'\\X'",
                           "'['", "']'", "'^'", "'-'", 'null', 'null', "'?'",
                           "'+'", "'*'", "'{'", "'}'", "','", "'\\b'", "'\\B'",
                           "'\\A'", "'$'", "'\\Z'", "'\\z'", "'\\G'", "'\\K'",
                           "'\\g'", "'\\k'", "'|'", "'('", "')'", "'<'",
                           "'>'", "'''", "'_'", "':'", "'#'", "'='", "'!'",
                           "'&'", "'a'", "'b'", "'c'", "'d'", "'e'", "'f'",
                           "'g'", "'h'", "'i'", "'j'", "'k'", "'l'", "'m'",
                           "'n'", "'o'", "'p'", "'q'", "'r'", "'s'", "'t'",
                           "'u'", "'v'", "'w'", "'x'", "'y'", "'z'", "'A'",
                           "'B'", "'C'", "'D'", "'E'", "'F'", "'G'", "'H'",
                           "'I'", "'J'", "'K'", "'L'", "'M'", "'N'", "'O'",
                           "'P'", "'Q'", "'R'", "'S'", "'T'", "'U'", "'V'",
                           "'W'", "'X'", "'Y'", "'Z'", "'1'", "'2'", "'3'",
                           "'4'", "'5'", "'6'", "'7'", "'8'", "'9'", "'0'" ];

PCRELexer.symbolicNames = [ 'null', "Quoted", "BlockQuoted", "BellChar",
                            "ControlChar", "EscapeChar", "FormFeed", "NewLine",
                            "CarriageReturn", "Tab", "Backslash", "HexChar",
                            "Dot", "OneDataUnit", "DecimalDigit", "NotDecimalDigit",
                            "HorizontalWhiteSpace", "NotHorizontalWhiteSpace",
                            "NotNewLine", "CharWithProperty", "CharWithoutProperty",
                            "NewLineSequence", "WhiteSpace", "NotWhiteSpace",
                            "VerticalWhiteSpace", "NotVerticalWhiteSpace",
                            "WordChar", "NotWordChar", "ExtendedUnicodeChar",
                            "CharacterClassStart", "CharacterClassEnd",
                            "Caret", "Hyphen", "POSIXNamedSet", "POSIXNegatedNamedSet",
                            "QuestionMark", "Plus", "Star", "OpenBrace",
                            "CloseBrace", "Comma", "WordBoundary", "NonWordBoundary",
                            "StartOfSubject", "EndOfSubjectOrLine", "EndOfSubjectOrLineEndOfSubject",
                            "EndOfSubject", "PreviousMatchInSubject", "ResetStartMatch",
                            "SubroutineOrNamedReferenceStartG", "NamedReferenceStartK",
                            "Pipe", "OpenParen", "CloseParen", "LessThan",
                            "GreaterThan", "SingleQuote", "Underscore",
                            "Colon", "Hash", "Equals", "Exclamation", "Ampersand",
                            "ALC", "BLC", "CLC", "DLC", "ELC", "FLC", "GLC",
                            "HLC", "ILC", "JLC", "KLC", "LLC", "MLC", "NLC",
                            "OLC", "PLC", "QLC", "RLC", "SLC", "TLC", "ULC",
                            "VLC", "WLC", "XLC", "YLC", "ZLC", "AUC", "BUC",
                            "CUC", "DUC", "EUC", "FUC", "GUC", "HUC", "IUC",
                            "JUC", "KUC", "LUC", "MUC", "NUC", "OUC", "PUC",
                            "QUC", "RUC", "SUC", "TUC", "UUC", "VUC", "WUC",
                            "XUC", "YUC", "ZUC", "D1", "D2", "D3", "D4",
                            "D5", "D6", "D7", "D8", "D9", "D0", "OtherChar" ];

PCRELexer.ruleNames = [ "Quoted", "BlockQuoted", "BellChar", "ControlChar",
                        "EscapeChar", "FormFeed", "NewLine", "CarriageReturn",
                        "Tab", "Backslash", "HexChar", "Dot", "OneDataUnit",
                        "DecimalDigit", "NotDecimalDigit", "HorizontalWhiteSpace",
                        "NotHorizontalWhiteSpace", "NotNewLine", "CharWithProperty",
                        "CharWithoutProperty", "NewLineSequence", "WhiteSpace",
                        "NotWhiteSpace", "VerticalWhiteSpace", "NotVerticalWhiteSpace",
                        "WordChar", "NotWordChar", "ExtendedUnicodeChar",
                        "CharacterClassStart", "CharacterClassEnd", "Caret",
                        "Hyphen", "POSIXNamedSet", "POSIXNegatedNamedSet",
                        "QuestionMark", "Plus", "Star", "OpenBrace", "CloseBrace",
                        "Comma", "WordBoundary", "NonWordBoundary", "StartOfSubject",
                        "EndOfSubjectOrLine", "EndOfSubjectOrLineEndOfSubject",
                        "EndOfSubject", "PreviousMatchInSubject", "ResetStartMatch",
                        "SubroutineOrNamedReferenceStartG", "NamedReferenceStartK",
                        "Pipe", "OpenParen", "CloseParen", "LessThan", "GreaterThan",
                        "SingleQuote", "Underscore", "Colon", "Hash", "Equals",
                        "Exclamation", "Ampersand", "ALC", "BLC", "CLC",
                        "DLC", "ELC", "FLC", "GLC", "HLC", "ILC", "JLC",
                        "KLC", "LLC", "MLC", "NLC", "OLC", "PLC", "QLC",
                        "RLC", "SLC", "TLC", "ULC", "VLC", "WLC", "XLC",
                        "YLC", "ZLC", "AUC", "BUC", "CUC", "DUC", "EUC",
                        "FUC", "GUC", "HUC", "IUC", "JUC", "KUC", "LUC",
                        "MUC", "NUC", "OUC", "PUC", "QUC", "RUC", "SUC",
                        "TUC", "UUC", "VUC", "WUC", "XUC", "YUC", "ZUC",
                        "D1", "D2", "D3", "D4", "D5", "D6", "D7", "D8",
                        "D9", "D0", "OtherChar", "UnderscoreAlphaNumerics",
                        "AlphaNumerics", "AlphaNumeric", "NonAlphaNumeric",
                        "HexDigit", "ASCII" ];

PCRELexer.grammarFileName = "PCRE.g4";



exports.PCRELexer = PCRELexer;

