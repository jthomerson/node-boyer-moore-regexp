// Generated from src/pcre/PCRE.g4 by ANTLR 4.5.1
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by PCREParser.
function PCREListener() {
    antlr4.tree.ParseTreeListener.call(this);
    return this;
}

PCREListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
PCREListener.prototype.constructor = PCREListener;

// Enter a parse tree produced by PCREParser#parse.
PCREListener.prototype.enterParse = function(ctx) {
};

// Exit a parse tree produced by PCREParser#parse.
PCREListener.prototype.exitParse = function(ctx) {
};


// Enter a parse tree produced by PCREParser#alternation.
PCREListener.prototype.enterAlternation = function(ctx) {
};

// Exit a parse tree produced by PCREParser#alternation.
PCREListener.prototype.exitAlternation = function(ctx) {
};


// Enter a parse tree produced by PCREParser#expr.
PCREListener.prototype.enterExpr = function(ctx) {
};

// Exit a parse tree produced by PCREParser#expr.
PCREListener.prototype.exitExpr = function(ctx) {
};


// Enter a parse tree produced by PCREParser#element.
PCREListener.prototype.enterElement = function(ctx) {
};

// Exit a parse tree produced by PCREParser#element.
PCREListener.prototype.exitElement = function(ctx) {
};


// Enter a parse tree produced by PCREParser#quantifier.
PCREListener.prototype.enterQuantifier = function(ctx) {
};

// Exit a parse tree produced by PCREParser#quantifier.
PCREListener.prototype.exitQuantifier = function(ctx) {
};


// Enter a parse tree produced by PCREParser#quantifier_type.
PCREListener.prototype.enterQuantifier_type = function(ctx) {
};

// Exit a parse tree produced by PCREParser#quantifier_type.
PCREListener.prototype.exitQuantifier_type = function(ctx) {
};


// Enter a parse tree produced by PCREParser#character_class.
PCREListener.prototype.enterCharacter_class = function(ctx) {
};

// Exit a parse tree produced by PCREParser#character_class.
PCREListener.prototype.exitCharacter_class = function(ctx) {
};


// Enter a parse tree produced by PCREParser#backreference.
PCREListener.prototype.enterBackreference = function(ctx) {
};

// Exit a parse tree produced by PCREParser#backreference.
PCREListener.prototype.exitBackreference = function(ctx) {
};


// Enter a parse tree produced by PCREParser#backreference_or_octal.
PCREListener.prototype.enterBackreference_or_octal = function(ctx) {
};

// Exit a parse tree produced by PCREParser#backreference_or_octal.
PCREListener.prototype.exitBackreference_or_octal = function(ctx) {
};


// Enter a parse tree produced by PCREParser#capture.
PCREListener.prototype.enterCapture = function(ctx) {
};

// Exit a parse tree produced by PCREParser#capture.
PCREListener.prototype.exitCapture = function(ctx) {
};


// Enter a parse tree produced by PCREParser#non_capture.
PCREListener.prototype.enterNon_capture = function(ctx) {
};

// Exit a parse tree produced by PCREParser#non_capture.
PCREListener.prototype.exitNon_capture = function(ctx) {
};


// Enter a parse tree produced by PCREParser#comment.
PCREListener.prototype.enterComment = function(ctx) {
};

// Exit a parse tree produced by PCREParser#comment.
PCREListener.prototype.exitComment = function(ctx) {
};


// Enter a parse tree produced by PCREParser#option.
PCREListener.prototype.enterOption = function(ctx) {
};

// Exit a parse tree produced by PCREParser#option.
PCREListener.prototype.exitOption = function(ctx) {
};


// Enter a parse tree produced by PCREParser#option_flags.
PCREListener.prototype.enterOption_flags = function(ctx) {
};

// Exit a parse tree produced by PCREParser#option_flags.
PCREListener.prototype.exitOption_flags = function(ctx) {
};


// Enter a parse tree produced by PCREParser#option_flag.
PCREListener.prototype.enterOption_flag = function(ctx) {
};

// Exit a parse tree produced by PCREParser#option_flag.
PCREListener.prototype.exitOption_flag = function(ctx) {
};


// Enter a parse tree produced by PCREParser#look_around.
PCREListener.prototype.enterLook_around = function(ctx) {
};

// Exit a parse tree produced by PCREParser#look_around.
PCREListener.prototype.exitLook_around = function(ctx) {
};


// Enter a parse tree produced by PCREParser#subroutine_reference.
PCREListener.prototype.enterSubroutine_reference = function(ctx) {
};

// Exit a parse tree produced by PCREParser#subroutine_reference.
PCREListener.prototype.exitSubroutine_reference = function(ctx) {
};


// Enter a parse tree produced by PCREParser#conditional.
PCREListener.prototype.enterConditional = function(ctx) {
};

// Exit a parse tree produced by PCREParser#conditional.
PCREListener.prototype.exitConditional = function(ctx) {
};


// Enter a parse tree produced by PCREParser#backtrack_control.
PCREListener.prototype.enterBacktrack_control = function(ctx) {
};

// Exit a parse tree produced by PCREParser#backtrack_control.
PCREListener.prototype.exitBacktrack_control = function(ctx) {
};


// Enter a parse tree produced by PCREParser#newline_convention.
PCREListener.prototype.enterNewline_convention = function(ctx) {
};

// Exit a parse tree produced by PCREParser#newline_convention.
PCREListener.prototype.exitNewline_convention = function(ctx) {
};


// Enter a parse tree produced by PCREParser#callout.
PCREListener.prototype.enterCallout = function(ctx) {
};

// Exit a parse tree produced by PCREParser#callout.
PCREListener.prototype.exitCallout = function(ctx) {
};


// Enter a parse tree produced by PCREParser#atom.
PCREListener.prototype.enterAtom = function(ctx) {
};

// Exit a parse tree produced by PCREParser#atom.
PCREListener.prototype.exitAtom = function(ctx) {
};


// Enter a parse tree produced by PCREParser#cc_atom.
PCREListener.prototype.enterCc_atom = function(ctx) {
};

// Exit a parse tree produced by PCREParser#cc_atom.
PCREListener.prototype.exitCc_atom = function(ctx) {
};


// Enter a parse tree produced by PCREParser#shared_atom.
PCREListener.prototype.enterShared_atom = function(ctx) {
};

// Exit a parse tree produced by PCREParser#shared_atom.
PCREListener.prototype.exitShared_atom = function(ctx) {
};


// Enter a parse tree produced by PCREParser#literal.
PCREListener.prototype.enterLiteral = function(ctx) {
};

// Exit a parse tree produced by PCREParser#literal.
PCREListener.prototype.exitLiteral = function(ctx) {
};


// Enter a parse tree produced by PCREParser#cc_literal.
PCREListener.prototype.enterCc_literal = function(ctx) {
};

// Exit a parse tree produced by PCREParser#cc_literal.
PCREListener.prototype.exitCc_literal = function(ctx) {
};


// Enter a parse tree produced by PCREParser#shared_literal.
PCREListener.prototype.enterShared_literal = function(ctx) {
};

// Exit a parse tree produced by PCREParser#shared_literal.
PCREListener.prototype.exitShared_literal = function(ctx) {
};


// Enter a parse tree produced by PCREParser#number.
PCREListener.prototype.enterNumber = function(ctx) {
};

// Exit a parse tree produced by PCREParser#number.
PCREListener.prototype.exitNumber = function(ctx) {
};


// Enter a parse tree produced by PCREParser#octal_char.
PCREListener.prototype.enterOctal_char = function(ctx) {
};

// Exit a parse tree produced by PCREParser#octal_char.
PCREListener.prototype.exitOctal_char = function(ctx) {
};


// Enter a parse tree produced by PCREParser#octal_digit.
PCREListener.prototype.enterOctal_digit = function(ctx) {
};

// Exit a parse tree produced by PCREParser#octal_digit.
PCREListener.prototype.exitOctal_digit = function(ctx) {
};


// Enter a parse tree produced by PCREParser#digits.
PCREListener.prototype.enterDigits = function(ctx) {
};

// Exit a parse tree produced by PCREParser#digits.
PCREListener.prototype.exitDigits = function(ctx) {
};


// Enter a parse tree produced by PCREParser#digit.
PCREListener.prototype.enterDigit = function(ctx) {
};

// Exit a parse tree produced by PCREParser#digit.
PCREListener.prototype.exitDigit = function(ctx) {
};


// Enter a parse tree produced by PCREParser#name.
PCREListener.prototype.enterName = function(ctx) {
};

// Exit a parse tree produced by PCREParser#name.
PCREListener.prototype.exitName = function(ctx) {
};


// Enter a parse tree produced by PCREParser#alpha_nums.
PCREListener.prototype.enterAlpha_nums = function(ctx) {
};

// Exit a parse tree produced by PCREParser#alpha_nums.
PCREListener.prototype.exitAlpha_nums = function(ctx) {
};


// Enter a parse tree produced by PCREParser#non_close_parens.
PCREListener.prototype.enterNon_close_parens = function(ctx) {
};

// Exit a parse tree produced by PCREParser#non_close_parens.
PCREListener.prototype.exitNon_close_parens = function(ctx) {
};


// Enter a parse tree produced by PCREParser#non_close_paren.
PCREListener.prototype.enterNon_close_paren = function(ctx) {
};

// Exit a parse tree produced by PCREParser#non_close_paren.
PCREListener.prototype.exitNon_close_paren = function(ctx) {
};


// Enter a parse tree produced by PCREParser#letter.
PCREListener.prototype.enterLetter = function(ctx) {
};

// Exit a parse tree produced by PCREParser#letter.
PCREListener.prototype.exitLetter = function(ctx) {
};



exports.PCREListener = PCREListener;
