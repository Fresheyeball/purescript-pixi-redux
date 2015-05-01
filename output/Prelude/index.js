// Generated by psc-make version 0.6.4
"use strict";

    function cons(e) {
      return function(l) {
        return [e].concat(l);
      };
    }
    ;

    function showStringImpl(s) {
      return JSON.stringify(s);
    }
    ;

    function showNumberImpl(n) {
      return n.toString();
    }
    ;

    function showArrayImpl(f) {
      return function(xs) {
        var ss = [];
        for (var i = 0, l = xs.length; i < l; i++) {
          ss[i] = f(xs[i]);
        }
        return '[' + ss.join(',') + ']';
      };
    }
    ;

    function numAdd(n1) {
      return function(n2) {
        return n1 + n2;
      };
    }
    ;

    function numSub(n1) {
      return function(n2) {
        return n1 - n2;
      };
    }
    ;

    function numMul(n1) {
      return function(n2) {
        return n1 * n2;
      };
    }
    ;

    function numDiv(n1) {
      return function(n2) {
        return n1 / n2;
      };
    }
    ;

    function numMod(n1) {
      return function(n2) {
        return n1 % n2;
      };
    }
    ;

    function numNegate(n) {
      return -n;
    }
    ;

    function refEq(r1) {
      return function(r2) {
        return r1 === r2;
      };
    }
    ;

    function refIneq(r1) {
      return function(r2) {
        return r1 !== r2;
      };
    }
    ;

    function eqArrayImpl(f) {
      return function(xs) {
        return function(ys) {
          if (xs.length !== ys.length) return false;
          for (var i = 0; i < xs.length; i++) {
            if (!f(xs[i])(ys[i])) return false;
          }
          return true;
        };
      };
    }
    ;

    function unsafeCompareImpl(lt) {
      return function(eq) {
        return function(gt) {
          return function(x) {
            return function(y) {
              return x < y ? lt : x > y ? gt : eq;
            };
          };
        };
      };
    }
    ;

    function numShl(n1) {
      return function(n2) {
        return n1 << n2;
      };
    }
    ;

    function numShr(n1) {
      return function(n2) {
        return n1 >> n2;
      };
    }
    ;

    function numZshr(n1) {
      return function(n2) {
        return n1 >>> n2;
      };
    }
    ;

    function numAnd(n1) {
      return function(n2) {
        return n1 & n2;
      };
    }
    ;

    function numOr(n1) {
      return function(n2) {
        return n1 | n2;
      };
    }
    ;

    function numXor(n1) {
      return function(n2) {
        return n1 ^ n2;
      };
    }
    ;

    function numComplement(n) {
      return ~n;
    }
    ;

    function boolAnd(b1) {
      return function(b2) {
        return b1 && b2;
      };
    }
    ;

    function boolOr(b1) {
      return function(b2) {
        return b1 || b2;
      };
    }
    ;

    function boolNot(b) {
      return !b;
    }
    ;

    function concatString(s1) {
      return function(s2) {
        return s1 + s2;
      };
    }
    ;
var Unit = function (x) {
    return x;
};
var LT = (function () {
    function LT() {

    };
    LT.value = new LT();
    return LT;
})();
var GT = (function () {
    function GT() {

    };
    GT.value = new GT();
    return GT;
})();
var EQ = (function () {
    function EQ() {

    };
    EQ.value = new EQ();
    return EQ;
})();
var Semigroupoid = function ($less$less$less) {
    this["<<<"] = $less$less$less;
};
var Category = function (__superclass_Prelude$dotSemigroupoid_0, id) {
    this["__superclass_Prelude.Semigroupoid_0"] = __superclass_Prelude$dotSemigroupoid_0;
    this.id = id;
};
var Show = function (show) {
    this.show = show;
};
var Functor = function ($less$dollar$greater) {
    this["<$>"] = $less$dollar$greater;
};
var Apply = function ($less$times$greater, __superclass_Prelude$dotFunctor_0) {
    this["<*>"] = $less$times$greater;
    this["__superclass_Prelude.Functor_0"] = __superclass_Prelude$dotFunctor_0;
};
var Applicative = function (__superclass_Prelude$dotApply_0, pure) {
    this["__superclass_Prelude.Apply_0"] = __superclass_Prelude$dotApply_0;
    this.pure = pure;
};
var Bind = function ($greater$greater$eq, __superclass_Prelude$dotApply_0) {
    this[">>="] = $greater$greater$eq;
    this["__superclass_Prelude.Apply_0"] = __superclass_Prelude$dotApply_0;
};
var Monad = function (__superclass_Prelude$dotApplicative_0, __superclass_Prelude$dotBind_1) {
    this["__superclass_Prelude.Applicative_0"] = __superclass_Prelude$dotApplicative_0;
    this["__superclass_Prelude.Bind_1"] = __superclass_Prelude$dotBind_1;
};
var Num = function ($percent, $times, $plus, $minus, $div, negate) {
    this["%"] = $percent;
    this["*"] = $times;
    this["+"] = $plus;
    this["-"] = $minus;
    this["/"] = $div;
    this.negate = negate;
};
var Eq = function ($div$eq, $eq$eq) {
    this["/="] = $div$eq;
    this["=="] = $eq$eq;
};
var Ord = function (__superclass_Prelude$dotEq_0, compare) {
    this["__superclass_Prelude.Eq_0"] = __superclass_Prelude$dotEq_0;
    this.compare = compare;
};
var Bits = function ($dot$amp$dot, $dot$up$dot, $dot$bar$dot, complement, shl, shr, zshr) {
    this[".&."] = $dot$amp$dot;
    this[".^."] = $dot$up$dot;
    this[".|."] = $dot$bar$dot;
    this.complement = complement;
    this.shl = shl;
    this.shr = shr;
    this.zshr = zshr;
};
var BoolLike = function ($amp$amp, not, $bar$bar) {
    this["&&"] = $amp$amp;
    this.not = not;
    this["||"] = $bar$bar;
};
var Semigroup = function ($less$greater) {
    this["<>"] = $less$greater;
};
var $bar$bar = function (dict) {
    return dict["||"];
};
var $greater$greater$eq = function (dict) {
    return dict[">>="];
};
var $eq$eq = function (dict) {
    return dict["=="];
};
var $less$greater = function (dict) {
    return dict["<>"];
};
var $less$less$less = function (dict) {
    return dict["<<<"];
};
var $greater$greater$greater = function (__dict_Semigroupoid_0) {
    return function (f) {
        return function (g) {
            return $less$less$less(__dict_Semigroupoid_0)(g)(f);
        };
    };
};
var $less$times$greater = function (dict) {
    return dict["<*>"];
};
var $less$dollar$greater = function (dict) {
    return dict["<$>"];
};
var $less$hash$greater = function (__dict_Functor_1) {
    return function (fa) {
        return function (f) {
            return $less$dollar$greater(__dict_Functor_1)(f)(fa);
        };
    };
};
var $colon = cons;
var $div$eq = function (dict) {
    return dict["/="];
};
var $div = function (dict) {
    return dict["/"];
};
var $dot$bar$dot = function (dict) {
    return dict[".|."];
};
var $dot$up$dot = function (dict) {
    return dict[".^."];
};
var $dot$amp$dot = function (dict) {
    return dict[".&."];
};
var $minus = function (dict) {
    return dict["-"];
};
var $plus$plus = function (__dict_Semigroup_2) {
    return $less$greater(__dict_Semigroup_2);
};
var $plus = function (dict) {
    return dict["+"];
};
var $times = function (dict) {
    return dict["*"];
};
var $amp$amp = function (dict) {
    return dict["&&"];
};
var $percent = function (dict) {
    return dict["%"];
};
var $dollar = function (f) {
    return function (x) {
        return f(x);
    };
};
var $hash = function (x) {
    return function (f) {
        return f(x);
    };
};
var zshr = function (dict) {
    return dict.zshr;
};
var unsafeCompare = unsafeCompareImpl(LT.value)(EQ.value)(GT.value);
var unit = {};
var shr = function (dict) {
    return dict.shr;
};
var showUnit = new Show(function (_7) {
    return "Unit {}";
});
var showString = new Show(showStringImpl);
var showOrdering = new Show(function (_15) {
    if (_15 instanceof LT) {
        return "LT";
    };
    if (_15 instanceof GT) {
        return "GT";
    };
    if (_15 instanceof EQ) {
        return "EQ";
    };
    throw new Error("Failed pattern match");
});
var showNumber = new Show(showNumberImpl);
var showBoolean = new Show(function (_8) {
    if (_8) {
        return "true";
    };
    if (!_8) {
        return "false";
    };
    throw new Error("Failed pattern match");
});
var show = function (dict) {
    return dict.show;
};
var showArray = function (__dict_Show_3) {
    return new Show(showArrayImpl(show(__dict_Show_3)));
};
var shl = function (dict) {
    return dict.shl;
};
var semigroupoidArr = new Semigroupoid(function (f) {
    return function (g) {
        return function (x) {
            return f(g(x));
        };
    };
});
var semigroupUnit = new Semigroup(function (_22) {
    return function (_23) {
        return {};
    };
});
var semigroupString = new Semigroup(concatString);
var semigroupArr = function (__dict_Semigroup_4) {
    return new Semigroup(function (f) {
        return function (g) {
            return function (x) {
                return $less$greater(__dict_Semigroup_4)(f(x))(g(x));
            };
        };
    });
};
var pure = function (dict) {
    return dict.pure;
};
var $$return = function (__dict_Monad_5) {
    return pure(__dict_Monad_5["__superclass_Prelude.Applicative_0"]());
};
var otherwise = true;
var numNumber = new Num(numMod, numMul, numAdd, numSub, numDiv, numNegate);
var not = function (dict) {
    return dict.not;
};
var negate = function (dict) {
    return dict.negate;
};
var liftM1 = function (__dict_Monad_6) {
    return function (f) {
        return function (a) {
            return $greater$greater$eq(__dict_Monad_6["__superclass_Prelude.Bind_1"]())(a)(function (_0) {
                return $$return(__dict_Monad_6)(f(_0));
            });
        };
    };
};
var liftA1 = function (__dict_Applicative_7) {
    return function (f) {
        return function (a) {
            return $less$times$greater(__dict_Applicative_7["__superclass_Prelude.Apply_0"]())(pure(__dict_Applicative_7)(f))(a);
        };
    };
};
var id = function (dict) {
    return dict.id;
};
var functorArr = new Functor($less$less$less(semigroupoidArr));
var flip = function (f) {
    return function (b) {
        return function (a) {
            return f(a)(b);
        };
    };
};
var eqUnit = new Eq(function (_11) {
    return function (_12) {
        return false;
    };
}, function (_9) {
    return function (_10) {
        return true;
    };
});
var ordUnit = new Ord(function () {
    return eqUnit;
}, function (_16) {
    return function (_17) {
        return EQ.value;
    };
});
var eqString = new Eq(refIneq, refEq);
var ordString = new Ord(function () {
    return eqString;
}, unsafeCompare);
var eqNumber = new Eq(refIneq, refEq);
var ordNumber = new Ord(function () {
    return eqNumber;
}, unsafeCompare);
var eqBoolean = new Eq(refIneq, refEq);
var ordBoolean = new Ord(function () {
    return eqBoolean;
}, function (_18) {
    return function (_19) {
        if (!_18 && !_19) {
            return EQ.value;
        };
        if (!_18 && _19) {
            return LT.value;
        };
        if (_18 && _19) {
            return EQ.value;
        };
        if (_18 && !_19) {
            return GT.value;
        };
        throw new Error("Failed pattern match");
    };
});
var $$const = function (_3) {
    return function (_4) {
        return _3;
    };
};
var $$void = function (__dict_Functor_9) {
    return function (fa) {
        return $less$dollar$greater(__dict_Functor_9)($$const(unit))(fa);
    };
};
var complement = function (dict) {
    return dict.complement;
};
var compare = function (dict) {
    return dict.compare;
};
var $less = function (__dict_Ord_11) {
    return function (a1) {
        return function (a2) {
            var _40 = compare(__dict_Ord_11)(a1)(a2);
            if (_40 instanceof LT) {
                return true;
            };
            return false;
        };
    };
};
var $less$eq = function (__dict_Ord_12) {
    return function (a1) {
        return function (a2) {
            var _41 = compare(__dict_Ord_12)(a1)(a2);
            if (_41 instanceof GT) {
                return false;
            };
            return true;
        };
    };
};
var $greater = function (__dict_Ord_13) {
    return function (a1) {
        return function (a2) {
            var _42 = compare(__dict_Ord_13)(a1)(a2);
            if (_42 instanceof GT) {
                return true;
            };
            return false;
        };
    };
};
var $greater$eq = function (__dict_Ord_14) {
    return function (a1) {
        return function (a2) {
            var _43 = compare(__dict_Ord_14)(a1)(a2);
            if (_43 instanceof LT) {
                return false;
            };
            return true;
        };
    };
};
var categoryArr = new Category(function () {
    return semigroupoidArr;
}, function (x) {
    return x;
});
var boolLikeBoolean = new BoolLike(boolAnd, boolNot, boolOr);
var eqArray = function (__dict_Eq_8) {
    return new Eq(function (xs) {
        return function (ys) {
            return not(boolLikeBoolean)($eq$eq(eqArray(__dict_Eq_8))(xs)(ys));
        };
    }, function (xs) {
        return function (ys) {
            return eqArrayImpl($eq$eq(__dict_Eq_8))(xs)(ys);
        };
    });
};
var ordArray = function (__dict_Ord_10) {
    return new Ord(function () {
        return eqArray(__dict_Ord_10["__superclass_Prelude.Eq_0"]());
    }, function (_20) {
        return function (_21) {
            if (_20.length === 0 && _21.length === 0) {
                return EQ.value;
            };
            if (_20.length === 0) {
                return LT.value;
            };
            if (_21.length === 0) {
                return GT.value;
            };
            if (_20.length >= 1) {
                var _50 = _20.slice(1);
                if (_21.length >= 1) {
                    var _48 = _21.slice(1);
                    var _46 = compare(__dict_Ord_10)(_20[0])(_21[0]);
                    if (_46 instanceof EQ) {
                        return compare(ordArray(__dict_Ord_10))(_50)(_48);
                    };
                    return _46;
                };
            };
            throw new Error("Failed pattern match");
        };
    });
};
var eqOrdering = new Eq(function (x) {
    return function (y) {
        return not(boolLikeBoolean)($eq$eq(eqOrdering)(x)(y));
    };
}, function (_13) {
    return function (_14) {
        if (_13 instanceof LT && _14 instanceof LT) {
            return true;
        };
        if (_13 instanceof GT && _14 instanceof GT) {
            return true;
        };
        if (_13 instanceof EQ && _14 instanceof EQ) {
            return true;
        };
        return false;
    };
});
var bitsNumber = new Bits(numAnd, numXor, numOr, numComplement, numShl, numShr, numZshr);
var asTypeOf = function (_5) {
    return function (_6) {
        return _5;
    };
};
var applyArr = new Apply(function (f) {
    return function (g) {
        return function (x) {
            return f(x)(g(x));
        };
    };
}, function () {
    return functorArr;
});
var bindArr = new Bind(function (m) {
    return function (f) {
        return function (x) {
            return f(m(x))(x);
        };
    };
}, function () {
    return applyArr;
});
var applicativeArr = new Applicative(function () {
    return applyArr;
}, $$const);
var monadArr = new Monad(function () {
    return applicativeArr;
}, function () {
    return bindArr;
});
var ap = function (__dict_Monad_15) {
    return function (f) {
        return function (a) {
            return $greater$greater$eq(__dict_Monad_15["__superclass_Prelude.Bind_1"]())(f)(function (_2) {
                return $greater$greater$eq(__dict_Monad_15["__superclass_Prelude.Bind_1"]())(a)(function (_1) {
                    return $$return(__dict_Monad_15)(_2(_1));
                });
            });
        };
    };
};
module.exports = {
    Unit: Unit, 
    LT: LT, 
    GT: GT, 
    EQ: EQ, 
    Semigroup: Semigroup, 
    BoolLike: BoolLike, 
    Bits: Bits, 
    Ord: Ord, 
    Eq: Eq, 
    Num: Num, 
    Monad: Monad, 
    Bind: Bind, 
    Applicative: Applicative, 
    Apply: Apply, 
    Functor: Functor, 
    Show: Show, 
    Category: Category, 
    Semigroupoid: Semigroupoid, 
    unit: unit, 
    "++": $plus$plus, 
    "<>": $less$greater, 
    not: not, 
    "||": $bar$bar, 
    "&&": $amp$amp, 
    complement: complement, 
    zshr: zshr, 
    shr: shr, 
    shl: shl, 
    ".^.": $dot$up$dot, 
    ".|.": $dot$bar$dot, 
    ".&.": $dot$amp$dot, 
    ">=": $greater$eq, 
    "<=": $less$eq, 
    ">": $greater, 
    "<": $less, 
    compare: compare, 
    refIneq: refIneq, 
    refEq: refEq, 
    "/=": $div$eq, 
    "==": $eq$eq, 
    negate: negate, 
    "%": $percent, 
    "/": $div, 
    "*": $times, 
    "-": $minus, 
    "+": $plus, 
    ap: ap, 
    liftM1: liftM1, 
    "return": $$return, 
    ">>=": $greater$greater$eq, 
    liftA1: liftA1, 
    pure: pure, 
    "<*>": $less$times$greater, 
    "void": $$void, 
    "<#>": $less$hash$greater, 
    "<$>": $less$dollar$greater, 
    show: show, 
    cons: cons, 
    ":": $colon, 
    "#": $hash, 
    "$": $dollar, 
    id: id, 
    ">>>": $greater$greater$greater, 
    "<<<": $less$less$less, 
    asTypeOf: asTypeOf, 
    "const": $$const, 
    flip: flip, 
    otherwise: otherwise, 
    semigroupoidArr: semigroupoidArr, 
    categoryArr: categoryArr, 
    showUnit: showUnit, 
    showString: showString, 
    showBoolean: showBoolean, 
    showNumber: showNumber, 
    showArray: showArray, 
    functorArr: functorArr, 
    applyArr: applyArr, 
    applicativeArr: applicativeArr, 
    bindArr: bindArr, 
    monadArr: monadArr, 
    numNumber: numNumber, 
    eqUnit: eqUnit, 
    eqString: eqString, 
    eqNumber: eqNumber, 
    eqBoolean: eqBoolean, 
    eqArray: eqArray, 
    eqOrdering: eqOrdering, 
    showOrdering: showOrdering, 
    ordUnit: ordUnit, 
    ordBoolean: ordBoolean, 
    ordNumber: ordNumber, 
    ordString: ordString, 
    ordArray: ordArray, 
    bitsNumber: bitsNumber, 
    boolLikeBoolean: boolLikeBoolean, 
    semigroupUnit: semigroupUnit, 
    semigroupString: semigroupString, 
    semigroupArr: semigroupArr
};
