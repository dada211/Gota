(function() {
  /**
   * @param {?} dialogId
   * @return {undefined}
   */
  function positionDialog(dialogId) {
    var el = $(args[1] + dialogId);
    if (el.css(args[2]) == args[3]) {
      show();
      el.show(500);
    }
  }
  /**
   * @return {undefined}
   */
  function show() {
    $(args[5]).children().each(function() {
      if ($(this).css(args[2]) == args[4]) {
        $(this).hide(500);
      }
    });
  }
  /**
   * @return {undefined}
   */
  function init() {
    /**
     * @return {undefined}
     */
    function run() {
      /**
       * @param {Function} err
       * @return {undefined}
       */
      function next(err) {
        jQuery.ajax({
          type : args[25],
          dataType : args[26],
          url : args[27],
          /**
           * @param {Object} map
           * @return {undefined}
           */
          success : function(map) {
            var letter;
            for (letter in map) {
              var iteratee = map[letter];
              var index;
              for (index in iteratee) {
                var message = iteratee[index];
                var settings = message.playersCurrent + args[28] + message.maxPlayers;
                testSource[message.name] = new constructor(message.name, message.address, settings, message.gamemode, letter.toLowerCase());
                testSource[message.name].playersCurrent = message.playersCurrent;
              }
            }
            initialize();
            if (err != null) {
              err();
            } else {
              if (d != null) {
                remove(d.name);
              }
            }
          },
          /**
           * @param {?} textStatus
           * @return {undefined}
           */
          error : function(textStatus) {
            initialize();
          }
        });
        var doc = new StatusPage.page({
          page : args[29]
        });
        doc.summary({
          /**
           * @param {Object} t
           * @return {undefined}
           */
          success : function(t) {
            $(args[30]).text(t.status.description);
            $(args[31]).addClass(t.status.indicator);
          }
        });
      }
      /**
       * @return {undefined}
       */
      function success() {
        jQuery.ajax({
          type : args[25],
          dataType : args[26],
          url : args[32],
          /**
           * @param {?} result
           * @return {undefined}
           */
          success : function(result) {
            var view = result[args[33]].toLowerCase();
            fn(view);
            var name;
            for (name in testSource) {
              if (testSource[name].region == view) {
                if (testSource[name].playersCurrent < 128) {
                  remove(name);
                  break;
                }
              }
            }
          },
          /**
           * @param {?} textStatus
           * @return {undefined}
           */
          error : function(textStatus) {
            fn(args[34]);
            remove(args[35]);
          }
        });
      }
      /**
       * @return {undefined}
       */
      function send() {
        jQuery.ajax({
          type : args[37],
          dataType : args[38],
          crossDomain : true,
          url : args[39],
          data : {
            "action" : args[40]
          },
          async : false,
          /**
           * @param {Object} res
           * @return {undefined}
           */
          success : function(res) {
            /** @type {*} */
            var map = JSON.parse(JSON.parse(res.json).names);
            var letter;
            for (letter in map) {
              var val = map[letter];
              /** @type {number} */
              obj[val] = 1;
            }
          },
          /**
           * @param {?} fmt
           * @param {?} msg
           * @param {?} reason
           * @return {undefined}
           */
          error : function(fmt, msg, reason) {
            console.log(fmt);
            console.log(args[41] + msg);
            console.log(args[42] + reason);
          }
        });
      }
      /** @type {(HTMLElement|null)} */
      node = document.getElementById(args[11]);
      ctx = node.getContext(args[12]);
      $this = $(args[13]);
      module = $(args[14]);
      el = $(args[15]);
      def = $(args[16]);
      jQuery = $(args[17]);
      child = $(args[18]);
      source = $(args[19]);
      hide();
      $(window).resize(resize);
      resize();
      /** @type {boolean} */
      _0x14E2B = false;
      /**
       * @param {Event} e
       * @return {undefined}
       */
      window.onmousemove = function(e) {
        self.mouseRawX = e.clientX;
        self.mouseRawY = e.clientY;
      };
      /**
       * @param {Event} ev
       * @return {undefined}
       */
      window.onkeydown = function(ev) {
        var udataCur = ev.which || (ev.keyCode || ev.charCode);
        if (_0x13CA3) {
          focus(udataCur);
          ev.preventDefault();
          return;
        }
        if (child.is(args[20])) {
          return;
        }
        if (udataCur == result.kEjectMass) {
          /** @type {boolean} */
          _0x14E2B = true;
        } else {
          if (udataCur == result.kSplit) {
            self.sendPacket(new stream.sendKey(17));
          } else {
            if (udataCur == result.kToggleSpec) {
              self.sendPacket(new stream.sendKey(18));
            } else {
              if (udataCur == result.kDoubleSplit) {
                self.sendPacket(new stream.sendKey(17));
                self.sendPacket(new stream.sendKey(17));
              } else {
                if (udataCur == result.kQuadSplit) {
                  /** @type {number} */
                  var _0x13BD7 = 0;
                  for (;_0x13BD7 < 4;_0x13BD7++) {
                    self.sendPacket(new stream.sendKey(17));
                  }
                } else {
                  if (udataCur == 27) {
                    cb($(args[13]));
                  } else {
                    if (udataCur == 38) {
                      if ($(args[13]).css(args[2]) == args[3]) {
                        self.mouseZoom *= 1.025;
                        self.mouseZoom = self.mouseZoom > 3 ? 3 : self.mouseZoom < 0.25 ? 0.25 : self.mouseZoom;
                      }
                    } else {
                      if (udataCur == 40) {
                        if ($(args[13]).css(args[2]) == args[3]) {
                          self.mouseZoom *= 0.975;
                          self.mouseZoom = self.mouseZoom > 3 ? 3 : self.mouseZoom < 0.25 ? 0.25 : self.mouseZoom;
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      };
      /**
       * @param {Event} e
       * @return {undefined}
       */
      window.onkeyup = function(e) {
        var sizeOfMessage = e.which || (e.keyCode || e.charCode);
        if (sizeOfMessage == result.kEjectMass) {
          /** @type {boolean} */
          _0x14E2B = false;
        }
      };
      $(document).on(args[21], function(event) {
        if ($(args[13]).css(args[2]) == args[3]) {
          var _0x16107 = event.originalEvent.wheelDelta || event.originalEvent.detail * -1;
          if (_0x16107 > 0) {
            self.mouseZoom *= 1.1;
          } else {
            self.mouseZoom *= 0.9;
          }
          self.mouseZoom = self.mouseZoom > 3 ? 3 : self.mouseZoom < 0.25 ? 0.25 : self.mouseZoom;
        }
      });
      document.addEventListener(args[22], function(e) {
        e.preventDefault();
        setup(e);
      });
      node.addEventListener(args[23], function(evt) {
        evt.preventDefault();
        /** @type {number} */
        var i = 0;
        for (;i < evt.changedTouches.length;i++) {
          var original = evt.changedTouches[i];
          self.mouseRawX = original.clientX;
          self.mouseRawY = original.clientY;
        }
      }, false);
      node.addEventListener(args[24], function(evt) {
        evt.preventDefault();
        /** @type {number} */
        var i = 0;
        for (;i < evt.changedTouches.length;i++) {
          var original = evt.changedTouches[i];
          self.mouseRawX = original.clientX;
          self.mouseRawY = original.clientY;
        }
      }, false);
      loadNext();
      /** @type {Array.<string>} */
      var parts = window.location.href.split(args[1]).slice(1).join(args[1]).split(args[36]);
      var name = args[6];
      if (parts[0]) {
        /** @type {string} */
        name = parts[0].toLowerCase();
      }
      if (parts[1]) {
        /** @type {string} */
        message = parts[1];
      }
      /** @type {null} */
      var error = null;
      if (name != null && name != args[6]) {
        name = name[0].toUpperCase() + name.slice(1);
        /**
         * @return {undefined}
         */
        error = function() {
          if (testSource[name] != null) {
            remove(name);
            fn(testSource[name].region);
          } else {
            success();
          }
        };
      } else {
        /** @type {function (): undefined} */
        error = success;
      }
      next(error);
      setInterval(function() {
        next(null);
      }, 9E5);
      obj = {};
      send();
      init();
      $(window).unload(upgrade);
      self = new Game;
      stream = new EventEmitter;
      $(args[43]).spectrum({
        color : settings.interfaceForegroundColor,
        showAlpha : true,
        /**
         * @param {?} start1
         * @return {undefined}
         */
        change : function(start1) {
          append();
        }
      });
      $(args[44]).spectrum({
        color : settings.interfaceBackgroundColor,
        showAlpha : true,
        /**
         * @param {?} start1
         * @return {undefined}
         */
        change : function(start1) {
          append();
        }
      });
      $(args[45]).spectrum({
        color : settings.gameBackgroundColor,
        /**
         * @param {?} start1
         * @return {undefined}
         */
        change : function(start1) {
          append();
        }
      });
      $(args[46]).spectrum({
        color : settings.gridColor,
        showAlpha : true,
        /**
         * @param {?} start1
         * @return {undefined}
         */
        change : function(start1) {
          append();
        }
      });
      handler();
      append();
      /** @type {number} */
      inc = Date.now();
      /** @type {number} */
      fps = 0;
      self.selfMsg(args[47]);
      window.requestAnimationFrame(draw);
    }
    /**
     * @param {?} next
     * @param {Object} id
     * @return {undefined}
     */
    function refresh(next, id) {
      var size = args[48];
      if (id) {
        size = id.toHexString();
        $(next).css(args[49], size);
      }
    }
    /**
     * @return {undefined}
     */
    function resize() {
      node.width = $(window).width();
      node.height = $(window).height();
    }
    /**
     * @return {undefined}
     */
    function append() {
      if (employees.cUiEnabled) {
        sizeCanvas();
      } else {
        $(args[43]).spectrum(args[50], data.uiForeground);
        $(args[44]).spectrum(args[50], data.uiBackground);
        $(args[45]).spectrum(args[50], data.background);
        $(args[46]).spectrum(args[50], data.gridColor);
        sizeCanvas();
      }
    }
    /**
     * @return {undefined}
     */
    function sizeCanvas() {
      settings.interfaceForegroundColor = $(args[43]).spectrum(args[40]).toRgbString();
      settings.interfaceBackgroundColor = $(args[44]).spectrum(args[40]).toRgbString();
      settings.gameBackgroundColor = $(args[45]).spectrum(args[40]).toRgbString();
      settings.gridColor = $(args[46]).spectrum(args[40]).toRgbString();
      $(args[51]).css({
        "color" : settings.interfaceForegroundColor,
        "background-color" : settings.interfaceBackgroundColor
      });
      $(args[52]).css({
        "color" : settings.interfaceForegroundColor,
        "background-color" : settings.interfaceBackgroundColor
      });
      $(args[53]).css({
        "color" : settings.interfaceForegroundColor,
        "background-color" : settings.interfaceBackgroundColor
      });
      $(args[54]).css({
        "color" : settings.interfaceForegroundColor,
        "background-color" : settings.interfaceBackgroundColor
      });
      $(args[55]).css({
        "color" : settings.interfaceForegroundColor
      });
    }
    /**
     * @return {undefined}
     */
    function draw() {
      /** @type {number} */
      var next = Date.now() - inc;
      /** @type {number} */
      inc = Date.now();
      /** @type {number} */
      var delta = Math.min(next / 90, 1);
      literal += next;
      ctx.save();
      ctx.clearRect(0, 0, node.width, node.height);
      ctx.fillStyle = settings.gameBackgroundColor;
      ctx.fillRect(0, 0, node.width, node.height);
      /** @type {number} */
      var endx = 0;
      /** @type {number} */
      var endy = 0;
      /** @type {number} */
      var length = 0;
      /** @type {number} */
      var index = 0;
      /** @type {null} */
      var current = null;
      var key;
      for (key in self.myCells) {
        current = self.myCells[key];
        if (current.steps > 0) {
          current.animate(delta);
        }
        if (current != null) {
          endx += current.x;
          endy += current.y;
          index += current.size;
          length++;
        }
      }
      if (length != 0) {
        /** @type {number} */
        self.centerX = endx / length;
        /** @type {number} */
        self.centerY = endy / length;
        /** @type {number} */
        self.centerSteps = 0;
        if (employees.cDisableAutoZoom) {
          /** @type {number} */
          self.scale_base = 0.25 * Math.max(node.height / 1080, node.width / 1920);
        } else {
          /** @type {number} */
          self.scale_base = Math.pow(Math.min(64 / index, 1), 0.4) * Math.max(node.height / 1080, node.width / 1920);
        }
      }
      if (self.centerSteps > 0) {
        self.centerX += (self.centerX_ - self.centerX) * delta;
        self.centerY += (self.centerY_ - self.centerY) * delta;
      }
      /** @type {number} */
      var _0x17977 = self.scale_base * self.mouseZoom;
      /** @type {number} */
      self.scale = (9 * self.scale + _0x17977) / 10;
      ctx.scale(self.scale, self.scale);
      /** @type {number} */
      self.offsetX = node.width / 2 / self.scale - self.centerX;
      /** @type {number} */
      self.offsetY = node.height / 2 / self.scale - self.centerY;
      if (employees.cShowGrid) {
        update(ctx);
      }
      ctx.translate(self.offsetX, self.offsetY);
      if (!employees.cHideFood) {
        for (key in self.foodObjects) {
          current = self.foodObjects[key];
          if (current.steps > 0) {
            current.animate(delta);
          }
          current.drawSimple(ctx);
        }
      }
      /** @type {number} */
      key = self.sorted.length - 1;
      for (;key >= 0;key--) {
        current = self.sorted[key];
        if (current.steps > 0 && current.playerId != self.playerId) {
          current.animate(delta);
        }
        current.draw(ctx);
      }
      ctx.restore();
      if (!employees.cHideMinimap) {
        render(delta);
      }
      if (!employees.cHideCoordinates) {
        create();
      }
      if (self.isConnected() && $this.css(args[2]) == args[3]) {
        /** @type {number} */
        var reply = self.mouseRawX / self.scale - self.offsetX;
        /** @type {number} */
        var item = self.mouseRawY / self.scale - self.offsetY;
        self.sendPacket(new stream.sendMouse(reply, item));
        if (_0x14E2B) {
          self.sendPacket(new stream.sendKey(21));
        }
      }
      distanceToUserValue++;
      if (literal >= 1E3) {
        $(args[56]).html(distanceToUserValue);
        /** @type {number} */
        literal = 0;
        /** @type {number} */
        distanceToUserValue = 0;
      }
      window.requestAnimationFrame(draw);
    }
    /**
     * @param {CanvasRenderingContext2D} ctx
     * @return {undefined}
     */
    function update(ctx) {
      /** @type {number} */
      var len = node.height / self.scale;
      /** @type {number} */
      var l = node.width / self.scale;
      ctx.strokeStyle = settings.gridColor;
      /** @type {number} */
      ctx.globalAlpha = 0.25;
      ctx.beginPath();
      /** @type {number} */
      var i = -0.5 + self.offsetX % 50;
      for (;i < l;i += 50) {
        ctx.moveTo(i + 5, 0);
        ctx.lineTo(i, len);
      }
      /** @type {number} */
      i = -0.5 + self.offsetY % 50;
      for (;i < len;i += 50) {
        ctx.moveTo(0, i + 5);
        ctx.lineTo(l, i);
      }
      ctx.closePath();
      ctx.stroke();
      /** @type {number} */
      ctx.globalAlpha = 1;
    }
    /**
     * @return {undefined}
     */
    function create() {
      $(args[57]).css({
        "color" : settings.interfaceForegroundColor
      });
      $(args[57]).html(args[58] + self.centerX.toFixed(2) + args[59] + self.centerY.toFixed(2));
    }
    /**
     * @param {number} delta
     * @return {undefined}
     */
    function render(delta) {
      /** @type {(HTMLElement|null)} */
      var node = document.getElementById(args[60]);
      mCtx = node.getContext(args[12]);
      mCtx.clearRect(0, 0, node.width, node.height);
      mCtx.font = args[61];
      /** @type {number} */
      var i = 0;
      for (;i < self.party.length;i++) {
        var m = self.party[i];
        if (m.x_ != -1 && (m.y_ != -1 && m.id != self.playerId)) {
          callback(mCtx, m.name, m.x, m.y, 4, m.mmColor, true);
          m.x += (m.x_ - m.x) * delta;
          m.y += (m.y_ - m.y) * delta;
        }
      }
      callback(mCtx, self.name, self.centerX, self.centerY, 6, args[62], false);
    }
    /**
     * @return {undefined}
     */
    function upgrade() {
      win();
    }
    /**
     * @return {undefined}
     */
    function Game() {
      /** @type {null} */
      this.socket = null;
      /** @type {null} */
      this.currentServer = null;
      /** @type {null} */
      this.currentServerName = null;
      /** @type {boolean} */
      this.spectate = false;
      this.name = args[6];
      /** @type {number} */
      this.playerId = -1;
      /** @type {Array} */
      this.bucket = [];
      /** @type {Array} */
      this.sorted = [];
      /** @type {Array} */
      this.foodObjects = [];
      /** @type {Array} */
      this.myCells = [];
      this.playerRegistry = new List;
      /** @type {number} */
      this.centerX = 0;
      /** @type {number} */
      this.centerY = 0;
      /** @type {number} */
      this.centerX_ = 0;
      /** @type {number} */
      this.centerY_ = 0;
      /** @type {number} */
      this.centerSteps = 0;
      /** @type {number} */
      this.scale = 1;
      /** @type {number} */
      this.scale_ = 1;
      /** @type {number} */
      this.scale_base = 1;
      /** @type {number} */
      this.mouseZoom = 1;
      /** @type {number} */
      this.offsetX = 0;
      /** @type {number} */
      this.offsetY = 0;
      /** @type {number} */
      this.mouseRawX = 0;
      /** @type {number} */
      this.mouseRawY = 0;
      /** @type {number} */
      this.mouseX = 0;
      /** @type {number} */
      this.mouseY = 0;
      /** @type {boolean} */
      this.rainbow = false;
      /** @type {Array} */
      this.party = [];
      this.partyIds = {};
      this.border = {};
      /** @type {number} */
      this.score = 0;
      this.clearStats();
      setInterval(this.sendPing.bind(this), 3E4);
    }
    /**
     * @param {?} id
     * @return {undefined}
     */
    function Player(id) {
      this.id = id;
      /** @type {number} */
      this.type = 0;
      /** @type {null} */
      this.nameCache = null;
      /** @type {null} */
      this.sizeCache = null;
      /** @type {null} */
      this.skin = null;
      /** @type {number} */
      this.playerId = 0;
      /** @type {null} */
      this.color = null;
      /** @type {number} */
      this.x = 0;
      /** @type {number} */
      this.y = 0;
      /** @type {number} */
      this.x_ = 0;
      /** @type {number} */
      this.y_ = 0;
      /** @type {number} */
      this.size = 0;
      /** @type {number} */
      this.size_ = 0;
      /** @type {number} */
      this.steps = 0;
    }
    /**
     * @return {undefined}
     */
    function List() {
      this.bucket = {};
      this.defaultData;
      /**
       * @return {undefined}
       */
      this.init = function() {
        this.defaultData = new Controller(0);
        this.defaultData.name = args[6];
        this.defaultData.cellColor = args[151];
      };
      /**
       * @param {Element} ctx
       * @return {undefined}
       */
      this.add = function(ctx) {
        /** @type {Element} */
        this.bucket[ctx.id] = ctx;
      };
      /**
       * @param {?} method
       * @return {undefined}
       */
      this.remove = function(method) {
        delete this.bucket[method];
      };
      /**
       * @return {undefined}
       */
      this.clear = function() {
        this.bucket = {};
      };
      /**
       * @param {?} i
       * @return {?}
       */
      this.getPlayer = function(i) {
        return this.bucket[i];
      };
      /**
       * @param {?} id
       * @return {?}
       */
      this.getPlayerById = function(id) {
        var args = this.bucket[id];
        return args != null ? args : this.defaultData;
      };
      this.init();
    }
    /**
     * @param {?} options
     * @return {undefined}
     */
    function Controller(options) {
      this.id = options;
      this.name;
      this.skin;
      this.cellColor;
      this.nameColor = args[147];
      /** @type {number} */
      this.flags = 0;
      /** @type {number} */
      this.effect = 0;
      /** @type {boolean} */
      this.lowerName = false;
      /** @type {null} */
      this.nameCache = null;
      /** @type {boolean} */
      this.cacheUpdate = false;
      /**
       * @param {number} effect
       * @return {undefined}
       */
      this.parseEffect = function(effect) {
        if (effect >= 64) {
          effect -= 64;
          /** @type {boolean} */
          this.lowerName = true;
        }
        /** @type {number} */
        this.effect = effect;
      };
      /**
       * @return {?}
       */
      this.getNameCache = function() {
        if (this.nameCache == null || this.cacheUpdate == true) {
          this.createNameCache();
        }
        return this.nameCache;
      };
      /**
       * @return {?}
       */
      this.createNameCache = function() {
        if (this.nameCache == null) {
          /** @type {Element} */
          this.nameCache = document.createElement(args[11]);
        }
        var canvas = this.nameCache.getContext(args[12]);
        /** @type {number} */
        var y = 72;
        var bgGrad = args[145] + y + args[146];
        canvas.font = bgGrad;
        this.nameCache.width = canvas.measureText(this.name).width + 4;
        /** @type {number} */
        this.nameCache.height = Math.floor(y * 1.35);
        canvas.font = bgGrad;
        canvas.fillStyle = this.nameColor;
        canvas.fillText(this.name, 2, y);
        if (employees.cTextOutlines == true) {
          /** @type {number} */
          canvas.lineWidth = 2;
          canvas.strokeStyle = args[148];
          canvas.strokeText(this.name, 2, y);
        }
        /** @type {boolean} */
        this.cacheUpdate = false;
        return this.nameCache;
      };
    }
    /**
     * @return {undefined}
     */
    function EventEmitter() {
    }
    /**
     * @param {number} expectedNumberOfNonCommentArgs
     * @param {DataView} data
     * @param {string} value
     * @return {undefined}
     */
    function emit(expectedNumberOfNonCommentArgs, data, value) {
      /** @type {number} */
      var i = 0;
      for (;i < value.length;i++) {
        data.setUint8(expectedNumberOfNonCommentArgs, value.charCodeAt(i));
        expectedNumberOfNonCommentArgs++;
      }
      data.setUint8(expectedNumberOfNonCommentArgs, 0);
    }
    /**
     * @param {number} expectedNumberOfNonCommentArgs
     * @param {DataView} view
     * @param {string} body
     * @return {undefined}
     */
    function set(expectedNumberOfNonCommentArgs, view, body) {
      /** @type {number} */
      var i = 0;
      for (;i < body.length;i++) {
        view.setUint16(expectedNumberOfNonCommentArgs, body.charCodeAt(i), true);
        expectedNumberOfNonCommentArgs += 2;
      }
      view.setUint16(expectedNumberOfNonCommentArgs, 0, true);
    }
    /**
     * @param {DataView} buffer
     * @return {?}
     */
    function String(buffer) {
      var str = args[6];
      for (;true;) {
        var b = buffer.getUint8(buffer.offset);
        buffer.offset++;
        if (b == 0) {
          break;
        }
        str += String.fromCharCode(b);
      }
      return str;
    }
    /**
     * @param {DataView} buffer
     * @return {?}
     */
    function read(buffer) {
      var next = args[6];
      for (;true;) {
        var lo = buffer.getUint16(buffer.offset, true);
        buffer.offset += 2;
        if (lo == 0) {
          break;
        }
        next += String.fromCharCode(lo);
      }
      return next;
    }
    /**
     * @param {Object} data
     * @return {undefined}
     */
    function onComplete(data) {
      for (;true;) {
        var _0x1739F = data.getUint16(data.offset, true);
        data.offset += 2;
        if (_0x1739F == 0) {
          break;
        }
      }
    }
    /**
     * @param {string} key
     * @return {?}
     */
    function next(key) {
      if (key.length == 0) {
        return null;
      }
      var idx = key.indexOf(args[106]);
      if (idx != -1) {
        var lastNestingSeparator = key.indexOf(args[136], idx);
        if (lastNestingSeparator != -1) {
          key = key.substring(idx + 1, lastNestingSeparator);
        }
      }
      key = key.toLowerCase();
      if (obj[key] != null) {
        if (obj[key] == 1) {
          /** @type {Image} */
          obj[key] = new Image;
          obj[key].src = args[153] + key + args[154];
          obj[key].addEventListener(args[155], function() {
            delete obj[key];
          });
        }
        return key;
      }
      return null;
    }
    /**
     * @return {undefined}
     */
    function init() {
      $(args[158]).on(args[156], function() {
        var view = $(this).attr(args[157]);
        fn(view);
      });
      $(args[160]).on(args[156], function() {
        if (Object.keys(self.myCells).length != 0 && this.currentServerName == d.name) {
          open($this);
          return;
        }
        /** @type {boolean} */
        self.spectate = false;
        if (model.incrementPlay() && typeof adplayer != args[159]) {
          adplayer.startPreRoll();
          open($this);
          hide();
        } else {
          self.play();
        }
      });
      $(args[65]).keypress(function(event) {
        if (event.keyCode == 13 && $(this).is(args[20])) {
          self.play();
        }
      });
      $(args[161]).on(args[156], function() {
        if (self.spectate && this.currentServerName == d.name) {
          open($this);
          return;
        }
        /** @type {boolean} */
        self.spectate = true;
        if (model.incrementPlay() && typeof adplayer != args[159]) {
          adplayer.startPreRoll();
          open($this);
          hide();
        } else {
          self.spec();
        }
      });
      $(args[18]).keypress(function(event) {
        if (event.keyCode == 13 && $(this).is(args[20])) {
          log($(this).val());
        }
      });
      $(args[162]).on(args[144], function(dataAndEvents) {
        parse($(this));
      });
      $(args[163]).on(args[156], function() {
        self.login();
      });
      $(args[73]).keypress(function(event) {
        if (event.keyCode == 13 && $(this).is(args[20])) {
          self.login();
        }
      });
      $(args[74]).keypress(function(event) {
        if (event.keyCode == 13 && $(this).is(args[20])) {
          self.login();
        }
      });
      $(args[164]).on(args[156], function() {
        open($(args[76]));
        close($this);
      });
      $(args[165]).on(args[156], function() {
        self.sendPacket(new stream.sendInviteResponse(true));
        open($(args[114]));
      });
      $(args[166]).on(args[156], function() {
        self.sendPacket(new stream.sendInviteResponse(false));
        open($(args[114]));
      });
      $(args[168]).on(args[156], function() {
        var item = jQuery.data(args[167]);
        self.sendPacket(new stream.sendPartyAction(0, item));
        jQuery.css(args[2], args[3]);
      });
      $(args[171]).on(args[156], function() {
        var _ = jQuery.data(args[167]);
        var date = $(args[18]).val();
        $(args[18]).val(args[169] + _ + args[170] + date);
        jQuery.css(args[2], args[3]);
      });
      $(args[173]).on(args[156], function() {
        var item = jQuery.data(args[172]) + 1;
        if (item >= 0) {
          self.sendPacket(new stream.sendPartyAction(2, item));
        }
        jQuery.css(args[2], args[3]);
      });
      $(args[174]).on(args[156], function() {
        var item = jQuery.data(args[172]) + 1;
        if (item >= 0) {
          self.sendPacket(new stream.sendPartyAction(1, item));
        }
        jQuery.css(args[2], args[3]);
      });
      $(document).on(args[156], function() {
        if ($(this) != jQuery) {
          jQuery.css(args[2], args[3]);
        }
      });
      /** @type {function (Event): undefined} */
      document.getElementById(args[131]).oncontextmenu = start;
      $(document).keyup(function(event) {
        if (event.keyCode == 13) {
          var el = $(args[18]);
          if (document.activeElement.tagName != args[175]) {
            el.focus();
          } else {
            if (el.is(args[20])) {
              el.blur();
            }
          }
        }
      });
      $(window).bind(args[176], function() {
        return args[177];
      });
      $(args[179]).mCustomScrollbar({
        axis : args[178]
      });
      done();
      loop();
      $(args[180]).on(args[156], function() {
        save();
        self.sendPacket(new stream.sendSubPanel);
      });
      $(args[182]).on(args[156], function() {
        $(args[182]).removeClass(args[181]);
        $(this).addClass(args[181]);
        /** @type {boolean} */
        _0x13CA3 = true;
      });
      $(args[183]).on(args[156], function() {
        focus(-1);
      });
      $(args[138]).on(args[144], function() {
        $(args[139]).children().css(args[2], args[3]);
        $(args[184] + $(this).val()).css(args[2], args[4]);
      });
      $(args[185]).on(args[156], function() {
        /** @type {number} */
        var value = parseInt($(args[138]).val());
        /** @type {number} */
        var reply = 0;
        if (isNaN(value)) {
          /** @type {number} */
          reply = 0;
        } else {
          /** @type {number} */
          reply = Math.min(Math.max(value, 0), 1);
        }
        self.sendPacket(new stream.sendQueue(reply));
      });
      $(args[186]).on(args[156], function() {
        self.sendPacket(new stream.sendLeaveMatch);
      });
    }
    /**
     * @param {number} value
     * @return {undefined}
     */
    function focus(value) {
      var obj = $(args[187]);
      /** @type {boolean} */
      _0x13CA3 = false;
      if (obj.size() == 0) {
        return;
      }
      var el = obj.first();
      obj.removeClass(args[181]);
      /** @type {number} */
      result[el.attr(args[188])] = value;
      show(el);
    }
    /**
     * @param {Object} el
     * @return {undefined}
     */
    function show(el) {
      var message = result[el.attr(args[188])];
      el.html(prefix(message));
    }
    /**
     * @param {number} key
     * @return {?}
     */
    function prefix(key) {
      return key > 0 ? m[key].toUpperCase() : args[6];
    }
    /**
     * @return {undefined}
     */
    function loadNext() {
      /** @type {Image} */
      myImage = new Image;
      myImage.src = args[189];
      /** @type {Image} */
      img = new Image;
      img.src = args[190];
      $cookies = {};
      gifEmoteList = {};
      var i;
      for (i in ps) {
        var key = ps[i];
        /** @type {boolean} */
        $cookies[key] = true;
      }
      for (i in path) {
        key = path[i];
        /** @type {boolean} */
        gifEmoteList[key] = true;
      }
      /** @type {number} */
      i = 0;
      for (;i < images.length;i++) {
        var _ = images[i];
        /** @type {Image} */
        var image = new Image;
        image.src = args[191] + _ + args[154];
        /** @type {Image} */
        images[i] = image;
      }
    }
    /**
     * @return {undefined}
     */
    function done() {
      if (!employees.cHideCoordinates) {
        $(args[197]).css({
          "border-top" : args[196]
        });
        $(args[195]).css({
          "height" : args[198]
        });
      } else {
        $(args[197]).css({
          "border-top" : args[199]
        });
        $(args[195]).css({
          "height" : args[200]
        });
      }
    }
    /**
     * @return {undefined}
     */
    function loop() {
      if (options.enabled) {
        $(args[201]).css(args[2], args[3]);
        $(args[127]).css(args[2], args[126]);
      } else {
        $(args[127]).css(args[2], args[3]);
        $(args[201]).css(args[2], args[126]);
      }
      $(args[203]).spectrum({
        color : options.nameColor,
        showAlpha : false,
        showInput : true,
        preferredFormat : args[202]
      });
      $(args[204]).spectrum({
        showPaletteOnly : true,
        showPalette : true,
        color : resultItems[options.chatColor],
        palette : resultItems
      });
      $(args[205]).val(options.skinName);
      $(args[207]).prop(args[206], options.lowerName);
    }
    /**
     * @return {undefined}
     */
    function save() {
      options.skinName = $(args[205]).val().toLowerCase();
      options.lowerName = $(args[207]).prop(args[206]);
      options.nameColor = $(args[203]).spectrum(args[40]).toRgb();
      var elt = $(args[204]).spectrum(args[40]).toHexString().toUpperCase();
      /** @type {number} */
      var active = 0;
      /** @type {number} */
      var i = 0;
      for (;i < resultItems.length;i++) {
        if (resultItems[i] == elt) {
          /** @type {number} */
          active = i;
          break;
        }
      }
      /** @type {number} */
      options.chatColor = active;
    }
    /**
     * @param {?} name
     * @param {?} inData
     * @param {?} config
     * @param {?} chart
     * @param {?} args
     * @return {undefined}
     */
    function constructor(name, inData, config, chart, args) {
      this.name = name;
      this.ip = inData;
      this.players = config;
      this.mode = chart;
      this.region = args;
      /** @type {number} */
      this.playersCurrent = 0;
    }
    /**
     * @return {undefined}
     */
    function initialize() {
      $(args[208]).html(args[6]);
      $(args[209]).html(args[6]);
      $(args[210]).html(args[6]);
      var name;
      for (name in testSource) {
        var map = testSource[name];
        $(args[217] + map.region).append(args[211] + map.name + args[212] + map.name + args[213] + map.name + args[214] + map.players + args[215] + map.mode + args[216]);
      }
      $(args[219]).on(args[156], function() {
        remove($(this).attr(args[218]));
      });
    }
    /**
     * @param {string} name
     * @return {undefined}
     */
    function remove(name) {
      if (d != null) {
        $(args[221] + d.name).removeClass(args[220]);
      }
      d = testSource[name];
      if (d != null) {
        $(args[221] + d.name).addClass(args[220]);
      }
    }
    /**
     * @param {Object} name
     * @return {undefined}
     */
    function fn(name) {
      name = name.toLowerCase();
      var obj = $(args[222] + name);
      $(args[224]).children().removeClass(args[223]);
      obj.addClass(args[223]);
      $(args[225]).children().css(args[2], args[3]);
      $(args[226] + name).css(args[2], args[4]);
    }
    /**
     * @param {Element} str
     * @return {undefined}
     */
    function error(str) {
      var imageWidth = $(args[227]).length;
      if (imageWidth >= winWidth) {
        $(args[228]).remove();
      }
      /** @type {Element} */
      var txt = document.createElement(args[229]);
      txt.appendChild(str);
      document.getElementById(args[230]).appendChild(txt);
      var self = $(args[179]);
      self.mCustomScrollbar(args[231], args[232]);
    }
    /**
     * @param {string} message
     * @return {undefined}
     */
    function log(message) {
      if (message.length == 0) {
        return;
      } else {
        if (message.charAt(0) == args[28]) {
          check(message);
        } else {
          self.sendPacket(new stream.sendChat(message, 0));
          bind(args[6]);
        }
      }
    }
    /**
     * @param {?} cookie
     * @return {undefined}
     */
    function bind(cookie) {
      $(args[18]).val(cookie);
    }
    /**
     * @param {string} url
     * @return {undefined}
     */
    function check(url) {
      var parts = url.split(args[170]);
      var spaceAfter = parts[0];
      switch(spaceAfter) {
        case args[234]:
          /** @type {number} */
          var num2 = parseInt(parts[1]);
          if (isNaN(num2)) {
            self.selfMsg(args[233]);
            bind(args[6]);
            break;
          }
          var binary = url.substring(parts[1].length + 4, url.length);
          if (binary.length != 0) {
            self.sendPacket(new stream.sendWhisper(num2, binary));
          }
          bind(args[169] + num2 + args[170]);
          break;
        case args[236]:
          binary = url.substring(3, url.length);
          if (binary.length != 0) {
            self.sendPacket(new stream.sendWhisper(0, binary));
          }
          bind(args[235]);
          break;
        case args[238]:
          binary = url.substring(3, url.length);
          if (binary.length != 0) {
            self.sendPacket(new stream.sendChat(binary, 1));
          }
          bind(args[237]);
          break;
        case args[239]:
        ;
        case args[241]:
          /** @type {number} */
          num2 = parseInt(parts[1]);
          if (!isNaN(num2)) {
            self.sendPacket(new stream.sendPartyAction(0, num2));
          } else {
            self.selfMsg(args[240]);
          }
          bind(args[6]);
          break;
        case args[242]:
          self.sendPacket(new stream.sendPartyAction(3, 0));
          bind(args[6]);
          break;
        case args[243]:
          /** @type {number} */
          num2 = parseInt(parts[1]);
          if (!isNaN(num2)) {
            self.sendPacket(new stream.sendPartyAction(2, num2));
          } else {
            self.selfMsg(args[240]);
          }
          bind(args[6]);
          break;
        case args[244]:
          /** @type {number} */
          num2 = parseInt(parts[1]);
          if (!isNaN(num2)) {
            self.sendPacket(new stream.sendPartyAction(1, num2));
          } else {
            self.selfMsg(args[240]);
          }
          bind(args[6]);
          break;
        case args[245]:
          /** @type {(HTMLElement|null)} */
          var tempDiv = document.getElementById(args[230]);
          for (;tempDiv.firstChild != null;) {
            tempDiv.removeChild(tempDiv.firstChild);
          }
          bind(args[6]);
          break;
        case args[248]:
          if (self.playerId > 0) {
            self.selfMsg(args[246] + self.playerId);
          } else {
            self.selfMsg(args[247]);
          }
          bind(args[6]);
          break;
        case args[249]:
          /** @type {number} */
          var p = parseInt(parts[1]);
          if (isNaN(num2)) {
            /** @type {number} */
            p = 0;
          } else {
            /** @type {number} */
            p = Math.min(Math.max(p, 0), 1);
          }
          self.sendPacket(new stream.sendQueue(p));
          bind(args[6]);
          break;
        case args[250]:
          def.css(args[2], def.css(args[2]) == args[3] ? args[4] : args[3]);
          bind(args[6]);
          break;
        case args[252]:
          self.disconnect();
          self.selfMsg(args[251]);
          bind(args[6]);
          break;
        case args[253]:
          var pName = parts[1];
          if (pName != null && pName.length != 0) {
            self.sendPacket(new stream.sendPartyJoin(pName));
          }
          bind(args[6]);
          break;
        case args[254]:
          self.sendPacket(new stream.sendPartyAction(4, 1));
          bind(args[6]);
          break;
        case args[255]:
          self.sendPacket(new stream.sendPartyAction(4, 0));
          bind(args[6]);
          break;
        default:
          self.selfMsg(args[256]);
          bind(args[6]);
          break;
      }
    }
    /**
     * @param {Event} e
     * @param {?} el
     * @param {?} type
     * @param {number} fn
     * @return {undefined}
     */
    function reset(e, el, type, fn) {
      /** @type {(HTMLElement|null)} */
      var list = document.getElementById(args[257]);
      for (;list.firstChild != null;) {
        list.removeChild(list.firstChild);
      }
      list.appendChild(el);
      jQuery.data(args[167], type);
      jQuery.data(args[172], fn);
      $(args[258]).css(args[2], args[3]);
      if (fn == -1) {
        $(args[168]).css(args[2], args[4]);
        $(args[171]).css(args[2], args[4]);
      } else {
        $(args[171]).css(args[2], args[4]);
        if (self.isPartyLeader()) {
          $(args[173]).css(args[2], args[4]);
          $(args[174]).css(args[2], args[4]);
        }
      }
      jQuery.css(args[2], args[4]);
      jQuery.css(args[259], e.clientX);
      jQuery.css(args[260], e.clientY);
    }
    /**
     * @param {string} string
     * @return {?}
     */
    function escape(string) {
      return string.replace(/</g, args[262]).replace(/>/g, args[261]);
    }
    /**
     * @param {?} name
     * @param {?} value
     * @return {?}
     */
    function Class(name, value) {
      /** @type {Element} */
      var obj = document.createElement(args[11]);
      var ctx = obj.getContext(args[12]);
      /** @type {number} */
      var y = 12;
      var labelFont = args[145] + y + args[263];
      ctx.font = labelFont;
      obj.width = ctx.measureText(name).width + 4;
      /** @type {number} */
      obj.height = y + 5;
      ctx.font = labelFont;
      ctx.fillStyle = value;
      ctx.fillText(name, 2, y + 2);
      return obj;
    }
    /**
     * @param {CanvasRenderingContext2D} context
     * @param {?} text
     * @param {?} value
     * @param {?} c
     * @param {number} r
     * @param {?} style
     * @param {boolean} recurring
     * @return {undefined}
     */
    function callback(context, text, value, c, r, style, recurring) {
      /** @type {number} */
      var x = value / self.border.width * 250;
      /** @type {number} */
      var y = c / self.border.width * 250;
      context.beginPath();
      context.arc(x, y, r, 0, angle, false);
      context.fillStyle = style;
      context.fill();
      if (recurring) {
        /** @type {number} */
        var touchX = context.measureText(text).width / 2;
        /** @type {number} */
        var dx = x - touchX;
        /** @type {number} */
        var yPos = y - 5;
        context.fillText(text, dx, yPos);
      }
    }
    /**
     * @param {Event} e
     * @return {undefined}
     */
    function setup(e) {
      /** @type {number} */
      var i = e.clientX / self.scale - self.offsetX;
      /** @type {number} */
      var a = e.clientY / self.scale - self.offsetY;
      /** @type {null} */
      var player = null;
      var p;
      /** @type {number} */
      var m = 0;
      for (;m < self.sorted.length;m++) {
        p = self.sorted[m];
        if (p.size < 25) {
          continue;
        }
        /** @type {number} */
        var al = p.y - p.size;
        var b = p.y + p.size;
        /** @type {number} */
        var padLength = p.x - p.size;
        var nb_it = p.x + p.size;
        if (a > b) {
          continue;
        }
        if (a < al) {
          continue;
        }
        if (i > nb_it) {
          continue;
        }
        if (i < padLength) {
          continue;
        }
        player = p;
        break;
      }
      if (player != null && player.playerId != 0) {
        var symbol = self.playerRegistry.getPlayer(player.playerId);
        if (symbol != null) {
          var failuresLink = Class(symbol.name, args[147]);
          reset(e, failuresLink, player.playerId, -1);
        }
      }
    }
    /**
     * @param {Object} obj
     * @return {undefined}
     */
    function close(obj) {
      if (obj.css(args[2]) == args[3]) {
        obj.css(args[2], args[4]);
        obj.animate({
          opacity : 1
        }, 500);
      }
    }
    /**
     * @param {Object} node
     * @return {undefined}
     */
    function open(node) {
      if (node.css(args[2]) == args[4] && node.css(args[264]) == 1) {
        node.animate({
          opacity : 0
        }, 500, function() {
          node.css(args[2], args[3]);
        });
      }
    }
    /**
     * @param {Object} obj
     * @return {undefined}
     */
    function cb(obj) {
      if (obj.css(args[2]) == args[4] && obj.css(args[264]) == 1) {
        open(obj);
      } else {
        if (obj.css(args[2]) == args[3]) {
          close(obj);
        }
      }
    }
    /**
     * @return {undefined}
     */
    function Init() {
      el.show();
      if (self.party.length == 0) {
        module.css(args[2], args[3]);
      }
      if (employees.cHideChat) {
        $(args[194]).css(args[2], args[3]);
      }
      if (employees.cHideMinimap) {
        $(args[195]).css(args[2], args[3]);
      }
    }
    /**
     * @return {undefined}
     */
    function hide() {
      el.hide();
    }
    /**
     * @param {Object} source
     * @return {undefined}
     */
    function parse(source) {
      var i = source.attr(args[188]);
      employees[i] = source.prop(args[206]);
      var c = ca[i];
      if (c != null) {
        c();
      }
    }
    /**
     * @return {undefined}
     */
    function win() {
      window.localStorage.setItem(args[265], JSON.stringify(employees));
      window.localStorage.setItem(args[266], JSON.stringify(result));
      window.localStorage.setItem(args[267], $(args[65]).val());
      window.localStorage.setItem(args[268], JSON.stringify(settings));
      window.localStorage.setItem(args[269], JSON.stringify(options));
    }
    /**
     * @return {undefined}
     */
    function handler() {
      /** @type {(null|string)} */
      var sets = window.localStorage.getItem(args[268]);
      if (sets) {
        /** @type {*} */
        sets = JSON.parse(sets);
        var i;
        for (i in sets) {
          if (sets[i] != args[6]) {
            settings[i] = sets[i];
          }
        }
      }
      $(args[43]).spectrum(args[50], settings.interfaceForegroundColor);
      $(args[44]).spectrum(args[50], settings.interfaceBackgroundColor);
      $(args[45]).spectrum(args[50], settings.gameBackgroundColor);
      $(args[46]).spectrum(args[50], settings.gridColor);
      /** @type {(null|string)} */
      var q = window.localStorage.getItem(args[266]);
      if (q) {
        /** @type {*} */
        q = JSON.parse(q);
        for (i in q) {
          if (q[i] != null && Number.isInteger(q[i])) {
            result[i] = q[i];
            show($(args[1] + i));
          }
        }
      }
      /** @type {(null|string)} */
      var props = window.localStorage.getItem(args[265]);
      if (props) {
        /** @type {*} */
        props = JSON.parse(props);
        var prop;
        for (prop in props) {
          if (props[prop] == true) {
            var el = $(args[1] + prop);
            el.prop(args[206], props[prop]);
            parse(el);
          }
        }
      }
      /** @type {(null|string)} */
      var oldPagerPosition = window.localStorage.getItem(args[267]);
      if (oldPagerPosition != null) {
        $(args[65]).val(oldPagerPosition);
      }
      /** @type {(null|string)} */
      var conf = window.localStorage.getItem(args[269]);
      if (conf) {
        /** @type {*} */
        conf = JSON.parse(conf);
        for (prop in conf) {
          if (conf[prop] != args[6]) {
            options[prop] = conf[prop];
          }
        }
      }
    }
    /**
     * @param {string} lang
     * @return {?}
     */
    function highlight(lang) {
      var codeSegments = lang.split(args[170]);
      var output = args[6];
      /** @type {null} */
      var key = null;
      /** @type {number} */
      var i = 0;
      for (;i < codeSegments.length;i++) {
        if (i != 0) {
          output += args[170];
        }
        key = codeSegments[i];
        if ($cookies[key] != null) {
          if (key.startsWith(args[75]) && key.endsWith(args[75])) {
            key = key.substring(1, key.length - 1);
          }
          output += args[270] + key + args[271] + key + args[272];
        } else {
          if (gifEmoteList[key] != null) {
            if (key.startsWith(args[75]) && key.endsWith(args[75])) {
              key = key.substring(1, key.length - 1);
            }
            output += args[273] + key + args[274] + key + args[272];
          } else {
            output += key;
          }
        }
      }
      return output;
    }
    /**
     * @param {?} socket
     * @return {undefined}
     */
    function ready(socket) {
      /** @type {Array} */
      this.particles = [];
      this.MAX_PARTICLES = socket;
      /**
       * @return {undefined}
       */
      this.init = function() {
        /** @type {number} */
        var MAX_PARTICLES = 0;
        for (;MAX_PARTICLES < this.MAX_PARTICLES;MAX_PARTICLES++) {
          var copies = new World(args[275], Math.floor(Math.random() * 7));
          this.particles.push(copies);
        }
      };
      /**
       * @param {CanvasRenderingContext2D} ctx
       * @param {number} position
       * @param {?} gameTick
       * @param {?} gameClock
       * @return {undefined}
       */
      this.onTick = function(ctx, position, gameTick, gameClock) {
        /** @type {number} */
        position = position / 1E3;
        var i;
        for (i in this.particles) {
          var layer = this.particles[i];
          layer.draw(ctx, position);
        }
      };
      this.init(socket);
    }
    /**
     * @param {?} cb
     * @param {number} frame
     * @return {undefined}
     */
    function World(cb, frame) {
      /** @type {null} */
      this.image = null;
      /** @type {number} */
      this.frame = frame;
      /** @type {number} */
      this.x = 0;
      /** @type {number} */
      this.y = 0;
      /** @type {number} */
      this.speed = 0;
      /** @type {number} */
      this.angle = 0;
      /**
       * @param {?} path
       * @return {undefined}
       */
      this.init = function(path) {
        /** @type {Image} */
        this.image = new Image;
        this.image.src = path;
        /** @type {number} */
        this.x = Math.random();
        /** @type {number} */
        this.y = Math.random() - 1.25;
        /** @type {number} */
        this.speed = (Math.random() * 7.5E-4 + 5E-4) * 60;
        /** @type {number} */
        this.angle = 0;
      };
      /**
       * @param {CanvasRenderingContext2D} ctx
       * @param {?} dt
       * @return {undefined}
       */
      this.draw = function(ctx, dt) {
        if (this.y > 1) {
          /** @type {number} */
          this.y = Math.random() * -0.25 + -0.1;
        } else {
          if (this.y < -1.25) {
            /** @type {number} */
            this.y = -1.25;
          }
        }
        if (this.x > 1) {
          /** @type {number} */
          this.x = 0;
        } else {
          if (this.x < 0) {
            /** @type {number} */
            this.x = 1;
          }
        }
        this.angle += Math.random() * 0.1 - 0.05;
        /** @type {number} */
        this.angle = Math.min(Math.max(-0.2, this.angle), 0.2);
        /** @type {number} */
        var t = dt * this.speed;
        this.x += t * Math.sin(this.angle);
        this.y += t * Math.cos(this.angle);
        /** @type {number} */
        var x = node.width * this.x;
        /** @type {number} */
        var y = node.height * this.y;
        ctx.drawImage(this.image, 25 * this.frame, 0, 25, 60, x, y, 25, 60);
      };
      this.init(cb);
    }
    /**
     * @param {number} wanted
     * @return {?}
     */
    function expect(wanted) {
      return codeSegments[wanted % (codeSegments.length - 1) + 1];
    }
    /**
     * @param {Array} array
     * @return {?}
     */
    function repeat(array) {
      /** @type {number} */
      var first = array.length - 1;
      for (;first > 0;first--) {
        /** @type {number} */
        var second = Math.floor(Math.random() * (first + 1));
        var temp = array[first];
        array[first] = array[second];
        array[second] = temp;
      }
      return array;
    }
    /**
     * @param {number} dataAndEvents
     * @return {?}
     */
    function clone(dataAndEvents) {
      return RGB_YUV_TABLE[dataAndEvents >> 4 & 15] + RGB_YUV_TABLE[dataAndEvents & 15];
    }
    /**
     * @param {number} data
     * @return {?}
     */
    function fire(data) {
      if (data <= 0) {
        return args[562];
      }
      /** @type {number} */
      var s = Math.floor(data / 3600);
      /** @type {number} */
      var code = Math.floor((data - s * 3600) / 60);
      /** @type {number} */
      var extent = data - s * 3600 - code * 60;
      if (code < 10 && s > 0) {
        code = args[199] + code;
      }
      if (extent < 10) {
        extent = args[199] + extent;
      }
      return(s > 0 ? s + args[75] : args[6]) + code + args[75] + extent;
    }
    /**
     * @return {undefined}
     */
    function Model() {
      /** @type {number} */
      this.playCounter = -1;
      /** @type {number} */
      this.deathCounter = 0;
      /**
       * @return {?}
       */
      this.incrementPlay = function() {
        this.playCounter++;
        if (this.playCounter % 5 == 0) {
          return true;
        } else {
          return false;
        }
      };
    }
    /**
     * @return {undefined}
     */
    function loaded() {
      if (typeof aipPlayer != args[159]) {
        adplayer = new aipPlayer({
          AD_WIDTH : 960,
          AD_HEIGHT : 540,
          PREROLL_ELEM : document.getElementById(args[563]),
          /**
           * @return {undefined}
           */
          AIP_COMPLETE : function() {
            if (!self.spectate) {
              self.play();
            } else {
              self.spec();
            }
          }
        });
      } else {
      }
    }
    /**
     * @param {?} path
     * @param {Function} success
     * @return {undefined}
     */
    function load(path, success) {
      var id = document.head || document.getElementsByTagName(args[564])[0];
      /** @type {Element} */
      var el = document.createElement(args[565]);
      /** @type {boolean} */
      var _0x16BA7 = true;
      el.async = args[566];
      el.type = args[567];
      el.charset = args[568];
      el.src = path;
      /** @type {function (): undefined} */
      el.onload = el.onreadystatechange = function() {
        if (_0x16BA7 && (!el.readyState || /loaded|complete/.test(el.readyState))) {
          /** @type {boolean} */
          _0x16BA7 = false;
          success();
          /** @type {null} */
          el.onload = el.onreadystatechange = null;
        }
      };
      id.appendChild(el);
    }
    var node;
    var ctx;
    var self;
    var stream;
    var inc;
    var obj;
    var q;
    var myImage;
    var img;
    var d;
    var $this;
    var module;
    var el;
    var source;
    var def;
    var jQuery;
    var child;
    var arr;
    var _0x14E2B;
    var $cookies;
    var message;
    var _0x14237;
    /** @type {number} */
    var literal = 0;
    /** @type {number} */
    var distanceToUserValue = 0;
    /** @type {number} */
    var angle = Math.PI * 2;
    /** @type {number} */
    var winWidth = 100;
    var testSource = {};
    var employees = {
      cAutoRespawn : false,
      cHideId : false,
      cHideServerDisplay : true,
      cHideNames : false,
      cHideSkins : false,
      cShowMass : false,
      cShowGrid : false,
      cTransCells : false,
      cSilentLogin : false,
      cHideChat : false,
      cDisableRainbow : false,
      cTextOutlines : false,
      cHideMinimap : false,
      cHideCoordinates : false,
      cHideFood : false,
      cColoredPing : false,
      cUiEnabled : false,
      cDisableAutoZoom : false,
      cAutoDecline : false
    };
    var result = {
      kEjectMass : 87,
      kSplit : 32,
      kToggleSpec : 81,
      kDoubleSplit : -1,
      kQuadSplit : -1
    };
    /** @type {boolean} */
    var _0x13CA3 = false;
    var settings = {
      interfaceForegroundColor : args[6],
      interfaceBackgroundColor : args[6],
      gameBackgroundColor : args[6],
      gridColor : args[6]
    };
    var data = {
      background : args[7],
      gridColor : args[8],
      uiBackground : args[9],
      uiForeground : args[10],
      alpha : 1
    };
    var options = {
      enabled : false,
      nameColor : {
        r : 0,
        g : 255,
        b : 255
      },
      chatColor : 0,
      lowerName : false,
      skinName : args[6]
    };
    /**
     * @return {undefined}
     */
    Game.prototype.clearStats = function() {
      this.stats = {
        name : args[63],
        alive : 0,
        eatenFood : 0,
        eatenEject : 0,
        eatenVirus : 0,
        eatenPlayer : 0,
        gainFood : 0,
        gainEject : 0,
        gainVirus : 0,
        gainPlayer : 0
      };
    };
    /**
     * @return {undefined}
     */
    Game.prototype.play = function() {
      if (d == null) {
        this.selfMsg(args[64]);
        return;
      }
      this.name = $(args[65]).val();
      /** @type {boolean} */
      this.spectate = false;
      this.currentServerName = d.name;
      $(args[66]).html(this.currentServerName);
      if (this.isConnected() && this.currentServer == d.ip) {
        this.sendPacket(new stream.setName(this.name));
      } else {
        this.connect(d.ip);
      }
      Init();
      open($this);
      ga(args[67], args[68], args[69], args[70], args[71]);
    };
    /**
     * @return {undefined}
     */
    Game.prototype.spec = function() {
      if (d == null) {
        this.selfMsg(args[64]);
        return;
      }
      /** @type {boolean} */
      this.spectate = true;
      if (this.isConnected() && this.currentServer == d.ip) {
        this.sendPacket(new stream.sendSpectate);
      } else {
        this.connect(d.ip);
      }
      Init();
      open($this);
      ga(args[67], args[68], args[69], args[70], args[72]);
    };
    /**
     * @return {undefined}
     */
    Game.prototype.login = function() {
      var prefix = $(args[73]).val();
      var str = $(args[74]).val();
      if (arr) {
        var inner = sha512(prefix + args[75] + sha512(str));
        inner = sha512(inner + arr);
        var testSource = sha512(prefix);
      } else {
        return;
      }
      /** @type {number} */
      var sendPacket = employees.cSilentLogin ? 12 : 13;
      this.sendPacket(new stream.sendLogin(sendPacket, testSource, inner));
      open($(args[76]));
    };
    /**
     * @param {string} callback
     * @return {undefined}
     */
    Game.prototype.connect = function(callback) {
      if (this.socket !== null) {
        this.disconnect(callback);
      } else {
        this.connectUrl(callback);
      }
    };
    /**
     * @param {string} callback
     * @return {undefined}
     */
    Game.prototype.connectUrl = function(callback) {
      /** @type {string} */
      this.currentServer = callback;
      this.currentServerName = d.name;
      /** @type {WebSocket} */
      this.socket = new WebSocket(args[77] + callback);
      this.socket.binaryType = args[78];
      var self = this;
      this.socket.onopen = this.onConnect.bind(this);
      this.socket.onmessage = this.onMessage.bind(this);
      /**
       * @param {?} data
       * @return {undefined}
       */
      this.socket.onclose = function(data) {
        self.reset();
      };
      /**
       * @param {?} er
       * @return {undefined}
       */
      this.socket.onerror = function(er) {
        self.reset();
        self.selfMsg(args[79]);
        setTimeout(function() {
          if (self.isConnected() === false) {
            self.connect(callback);
          }
        }, 1E3);
      };
    };
    /**
     * @param {string} callback
     * @return {undefined}
     */
    Game.prototype.disconnect = function(callback) {
      if (this.socket == null) {
        return;
      }
      var self = this;
      /**
       * @param {?} data
       * @return {undefined}
       */
      this.socket.onclose = function(data) {
        self.reset();
        if (callback != null) {
          self.connectUrl(callback);
        }
      };
      this.socket.close();
    };
    /**
     * @return {undefined}
     */
    Game.prototype.reset = function() {
      if (this.socket !== null) {
        this.socket.close();
        /** @type {null} */
        this.socket = null;
      }
      /** @type {Array} */
      this.bucket = [];
      /** @type {Array} */
      this.sorted = [];
      /** @type {Array} */
      this.foodObjects = [];
      /** @type {Array} */
      this.myCells = [];
      this.playerRegistry.clear();
      /** @type {number} */
      this.playerId = -1;
      /** @type {number} */
      this.rainbow = 0;
      /** @type {number} */
      this.score = 0;
      /** @type {null} */
      this.currentServer = null;
      this.clearStats();
      this.clearParty();
      $(args[80]).html(this.playerId);
    };
    /**
     * @return {?}
     */
    Game.prototype.isConnected = function() {
      if (this.socket == null) {
        return false;
      } else {
        return this.socket.readyState == 1;
      }
    };
    /**
     * @param {?} packet
     * @return {undefined}
     */
    Game.prototype.sendPacket = function(packet) {
      if (this.isConnected()) {
        this.socket.send(packet);
      }
    };
    /**
     * @return {undefined}
     */
    Game.prototype.onConnect = function() {
      this.sendPacket(new stream.connectionStart);
      this.sendPacket(new stream.sendSubPanel);
      this.sendPing();
      if (!this.spectate) {
        this.sendPacket(new stream.setName(this.name));
      } else {
        this.sendPacket(new stream.sendSpectate);
      }
    };
    /**
     * @return {undefined}
     */
    Game.prototype.sendPing = function() {
      if (this.isConnected()) {
        /** @type {number} */
        q = +new Date;
        this.sendPacket(new stream.sendPing);
      }
    };
    /**
     * @param {?} v
     * @return {undefined}
     */
    Game.prototype.selfMsg = function(v) {
      /** @type {Element} */
      var self = document.createElement(args[81]);
      /** @type {Element} */
      var debug = document.createElement(args[82]);
      debug.style.color = args[83];
      debug.innerHTML = args[84] + escape(v);
      self.appendChild(debug);
      error(self);
    };
    /**
     * @param {string} v
     * @param {?} xhtml
     * @return {undefined}
     */
    Game.prototype.selfMsgWithJoinCode = function(v, xhtml) {
      /** @type {Element} */
      var self = document.createElement(args[81]);
      /** @type {Element} */
      var debug = document.createElement(args[82]);
      debug.style.color = args[83];
      debug.innerHTML = args[84] + escape(v);
      self.appendChild(debug);
      /** @type {Element} */
      var e = document.createElement(args[82]);
      e.style.color = args[83];
      e.innerHTML = xhtml;
      e.style.pointerEvents = args[85];
      e.style.userSelect = args[85];
      self.appendChild(e);
      error(self);
    };
    /**
     * @param {?} dataAndEvents
     * @return {undefined}
     */
    Game.prototype.clearParty = function(dataAndEvents) {
      /** @type {Array} */
      this.party = [];
      this.partyIds = {};
      /** @type {number} */
      this.partyLeader = -1;
      $(args[14]).css(args[2], args[3]);
    };
    /**
     * @return {?}
     */
    Game.prototype.isPartyLeader = function() {
      return this.partyLeader == this.playerId;
    };
    /**
     * @param {MessageEvent} message
     * @return {undefined}
     */
    Game.prototype.onMessage = function(message) {
      /** @type {DataView} */
      var pdataCur = new DataView(message.data);
      /** @type {number} */
      var _0x152F3 = pdataCur.getUint8(0);
      /** @type {number} */
      pdataCur.offset = 1;
      switch(_0x152F3) {
        case 2:
          this.handleUpdate(pdataCur);
          break;
        case 10:
          this.handlePosition(pdataCur);
          break;
        case 13:
          this.handleLogin(pdataCur);
          break;
        case 21:
          this.handleStats(pdataCur);
          break;
        case 22:
          this.showSubPanel(pdataCur);
          break;
        case 40:
          this.handleInvite(pdataCur);
          break;
        case 41:
          this.handlePartyInfo(pdataCur);
          break;
        case 42:
          this.handlePartyData(pdataCur);
          break;
        case 43:
          this.handlePartyJoinCode(pdataCur);
          break;
        case 49:
          this.handleLeaderboard(pdataCur);
          break;
        case 50:
          this.handleLeaderboardCustom(pdataCur);
          break;
        case 64:
          this.handleClientData(pdataCur);
          break;
        case 70:
          this.handleSystemMsg(pdataCur);
          break;
        case 71:
          this.handlePing();
          break;
        case 72:
          this.handleChat(pdataCur);
          break;
        case 73:
          this.handleWhisper(pdataCur);
          break;
        case 80:
          this.handleShowScrimmageMenu();
          break;
        case 81:
          this.handleQueueData(pdataCur);
          break;
        case 82:
          this.handleQueueLeave(pdataCur);
          break;
        case 83:
          this.handleMatchState(pdataCur);
          break;
        case 90:
          this.handleScrimmageData(pdataCur);
          break;
      }
    };
    /**
     * @param {DataView} data
     * @return {undefined}
     */
    Game.prototype.handleUpdate = function(data) {
      for (;true;) {
        var i = data.getUint16(data.offset, true);
        data.offset += 2;
        if (i == 0) {
          break;
        }
        var c = this.playerRegistry.getPlayer(i);
        /** @type {boolean} */
        var _0x1537B = false;
        if (c == null) {
          c = new Controller(i);
        } else {
          /** @type {boolean} */
          _0x1537B = true;
        }
        c.cellColor = args[1] + clone(data.getUint8(data.offset++)) + clone(data.getUint8(data.offset++)) + clone(data.getUint8(data.offset++));
        c.name = read(data);
        c.flags = data.getUint8(data.offset++);
        if ((c.flags & 2) == 2) {
          c.nameColor = args[1] + clone(data.getUint8(data.offset++)) + clone(data.getUint8(data.offset++)) + clone(data.getUint8(data.offset++));
          c.parseEffect(data.getUint8(data.offset++));
          c.skin = next(String(data));
          /** @type {boolean} */
          c.cacheUpdate = true;
        }
        if (c.skin == null) {
          c.skin = next(c.name);
        }
        if (!_0x1537B) {
          self.playerRegistry.add(c);
        }
      }
      for (;true;) {
        i = data.getUint16(data.offset, true);
        data.offset += 2;
        if (i == 0) {
          break;
        }
        var type = data.getUint8(data.offset++);
        var player;
        if (type == 0) {
          player = this.foodObjects[i];
        } else {
          player = this.bucket[i];
        }
        if (player == null) {
          player = new Player(i);
          player.setType(type);
          player.setX(data.getInt16(data.offset, true));
          player.setY(data.getInt16(data.offset + 2, true));
          data.offset += 4;
          switch(type) {
            case 0:
              player.setSize(14);
              player.color = expect(player.id);
              break;
            case 1:
              player.setSize(data.getUint16(data.offset, true));
              data.offset += 2;
              player.color = args[1] + clone(data.getUint8(data.offset++)) + clone(data.getUint8(data.offset++)) + clone(data.getUint8(data.offset++));
              /** @type {number} */
              player.skin = data.getUint8(data.offset++) - 1;
              break;
            case 2:
              player.setSize(data.getUint16(data.offset, true));
              data.offset += 2;
              player.playerId = data.getUint16(data.offset, true);
              data.offset += 2;
              break;
            case 3:
              player.setSize(data.getUint16(data.offset, true));
              data.offset += 2;
              break;
            case 4:
              player.setSize(data.getUint16(data.offset, true));
              data.offset += 2;
              break;
          }
          if (type == 0) {
            this.foodObjects[i] = player;
          } else {
            this.bucket[i] = player;
          }
          if (player.playerId == this.playerId) {
            this.myCells[i] = player;
          }
        } else {
          player.updateX(data.getInt16(data.offset, true));
          player.updateY(data.getInt16(data.offset + 2, true));
          data.offset += 4;
          switch(type) {
            case 0:
              break;
            case 1:
              player.size_ = data.getUint16(data.offset, true);
              data.offset += 2;
              data.offset += 4;
              break;
            case 2:
              player.size_ = data.getUint16(data.offset, true);
              data.offset += 2;
              data.offset += 2;
              break;
            case 3:
              player.size_ = data.getUint16(data.offset, true);
              data.offset += 2;
              break;
            case 4:
              player.size_ = data.getUint16(data.offset, true);
              data.offset += 2;
              break;
          }
          /** @type {number} */
          player.steps = 30;
        }
      }
      var _0x15337 = data.getUint16(data.offset, true);
      data.offset += 2;
      for (;_0x15337 > 0;) {
        i = data.getUint16(data.offset, true);
        data.offset += 2;
        self.playerRegistry.remove(i);
        _0x15337--;
      }
      _0x15337 = data.getUint16(data.offset, true);
      data.offset += 2;
      for (;_0x15337 > 0;) {
        i = data.getUint16(data.offset, true);
        data.offset += 2;
        player = this.bucket[i] || this.foodObjects[i];
        if (player != null) {
          if (player.type == 0) {
            delete this.foodObjects[i];
          } else {
            delete this.bucket[i];
          }
          if (player.playerId == this.playerId) {
            delete this.myCells[i];
            if (Object.keys(this.myCells).length == 0) {
              if (employees.cAutoRespawn) {
                if ($(args[13]).css(args[2]) == args[3]) {
                  self.play();
                }
              } else {
                if (def.css(args[2]) != args[4]) {
                  close($this);
                }
                googletag.pubads().refresh();
              }
            }
          }
        }
        _0x15337--;
      }
      this.sortCells();
    };
    /**
     * @param {Object} data
     * @return {undefined}
     */
    Game.prototype.handlePosition = function(data) {
      this.centerX_ = data.getFloat32(data.offset, true);
      data.offset += 4;
      this.centerY_ = data.getFloat32(data.offset, true);
      data.offset += 4;
      /** @type {number} */
      this.centerSteps = 30;
      if (!employees.cDisableAutoZoom) {
        this.scale_base = data.getFloat32(data.offset, true);
      }
    };
    /**
     * @param {DataView} data
     * @return {undefined}
     */
    Game.prototype.handleClientData = function(data) {
      this.playerId = data.getUint16(data.offset, true);
      data.offset += 2;
      /** @type {boolean} */
      this.rainbow = data.getUint8(data.offset++) == 1;
      this.border = {};
      this.border.left = data.getUint16(data.offset, true);
      data.offset += 2;
      this.border.top = data.getUint16(data.offset, true);
      data.offset += 2;
      this.border.right = data.getUint16(data.offset, true);
      data.offset += 2;
      this.border.bottom = data.getUint16(data.offset, true);
      data.offset += 2;
      /** @type {number} */
      this.border.width = this.border.right - this.border.left;
      /** @type {number} */
      this.border.height = this.border.bottom - this.border.top;
      $(args[80]).html(self.playerId);
      if (message != null) {
        self.sendPacket(new stream.sendPartyJoin(message));
        /** @type {null} */
        message = null;
      }
      def.css(args[2], args[3]);
      $(args[86]).css(args[2], args[3]);
    };
    /**
     * @param {DataView} data
     * @return {undefined}
     */
    Game.prototype.handleLeaderboard = function(data) {
      /** @type {(HTMLElement|null)} */
      var can = document.getElementById(args[87]);
      var context = can.getContext(args[12]);
      source.html(args[88]);
      var padLength = data.getUint32(data.offset, true);
      data.offset += 4;
      /** @type {number} */
      can.width = 200;
      /** @type {number} */
      can.height = 20 * padLength + 5;
      context.font = args[89];
      /** @type {number} */
      var y = 20;
      /** @type {number} */
      var i = 0;
      for (;i < padLength;i++) {
        var unlock = data.getUint16(data.offset, true);
        data.offset += 2;
        var theTime = read(data) || args[63];
        if (unlock == this.playerId) {
          context.fillStyle = args[90];
        } else {
          if (this.partyIds[unlock] != null) {
            context.fillStyle = args[91];
          } else {
            context.fillStyle = settings.interfaceForegroundColor;
          }
        }
        context.fillText(i + 1 + args[92] + theTime, 5, y);
        y += 20;
      }
    };
    /**
     * @param {DataView} data
     * @return {undefined}
     */
    Game.prototype.handleLeaderboardCustom = function(data) {
      /** @type {(HTMLElement|null)} */
      var can = document.getElementById(args[87]);
      var context = can.getContext(args[12]);
      source.html(args[88]);
      var padLength = data.getUint16(data.offset, true);
      var last = data.getUint8(data.offset + 2, true);
      data.offset += 3;
      /** @type {number} */
      can.width = 200;
      /** @type {number} */
      can.height = 20 * padLength + 5;
      context.font = args[89];
      /** @type {number} */
      var y = 20;
      /** @type {number} */
      var i = 0;
      for (;i < padLength;i++) {
        var str = String(data);
        if (i == last) {
          context.fillStyle = args[90];
        } else {
          context.fillStyle = settings.interfaceForegroundColor;
        }
        context.fillText(str, 5, y);
        y += 20;
      }
    };
    /**
     * @return {undefined}
     */
    Game.prototype.handlePing = function() {
      /** @type {number} */
      var p = +new Date - q;
      if (!employees.cColoredPing) {
        if (p < 100) {
          $(args[94]).css({
            "color" : args[93]
          });
        } else {
          if (p < 150) {
            $(args[94]).css({
              "color" : args[95]
            });
          } else {
            if (p < 200) {
              $(args[94]).css({
                "color" : args[96]
              });
            } else {
              if (p > 200) {
                $(args[94]).css({
                  "color" : args[97]
                });
              }
            }
          }
        }
      } else {
        $(args[94]).css({
          "color" : data.uiForeground
        });
      }
      $(args[94]).html(p + args[98]);
    };
    /**
     * @param {DataView} data
     * @return {undefined}
     */
    Game.prototype.handleChat = function(data) {
      var _0x15623 = data.getUint8(data.offset++);
      var udataCur = args[99] + data.getUint8(data.offset++) + args[100] + data.getUint8(data.offset++) + args[100] + data.getUint8(data.offset++) + args[101];
      var i = data.getUint8(data.offset++);
      var playerId = data.getUint16(data.offset, true);
      data.offset += 2;
      var str = String(data);
      var parent = read(data) || args[63];
      var code = escape(read(data));
      var html;
      switch(_0x15623) {
        case 1:
          html = args[102];
          break;
        case 2:
          html = args[103];
          break;
        default:
          html = args[104];
          break;
      }
      if (str.length > 0) {
        escape(html += args[105] + str);
      }
      /** @type {Element} */
      var self = document.createElement(args[81]);
      /** @type {Element} */
      var strong = document.createElement(args[82]);
      strong.innerHTML = args[106] + html + args[107];
      self.appendChild(strong);
      var div = Class(parent, udataCur);
      div.dataset.playerId = playerId;
      /** @type {function (Event): undefined} */
      div.oncontextmenu = clear;
      div.style.userSelect = args[3];
      self.appendChild(div);
      /** @type {Element} */
      var debug = document.createElement(args[82]);
      debug.style.color = resultItems[i];
      if (i == 0) {
        debug.innerHTML = args[108] + highlight(code);
      } else {
        /** @type {Element} */
        var canvas = document.createElement(args[82]);
        canvas.innerHTML = args[108];
        self.appendChild(canvas);
        debug.innerHTML = highlight(code);
      }
      self.appendChild(debug);
      error(self);
    };
    /**
     * @param {DataView} data
     * @return {undefined}
     */
    Game.prototype.handleWhisper = function(data) {
      var rvar = read(data) || args[63];
      data.offset += 2;
      var udataCur = args[99] + data.getUint8(data.offset++) + args[100] + data.getUint8(data.offset++) + args[100] + data.getUint8(data.offset++) + args[101];
      var parent = read(data) || args[63];
      data.offset += 2;
      var pdataOld = args[99] + data.getUint8(data.offset++) + args[100] + data.getUint8(data.offset++) + args[100] + data.getUint8(data.offset++) + args[101];
      var code = escape(read(data));
      /** @type {Element} */
      var e = document.createElement(args[81]);
      var c = Class(rvar, udataCur);
      c.style.userSelect = args[3];
      e.appendChild(c);
      /** @type {Element} */
      var elt = document.createElement(args[82]);
      elt.innerHTML = args[109];
      e.appendChild(elt);
      var div = Class(parent, pdataOld);
      div.style.userSelect = args[3];
      e.appendChild(div);
      /** @type {Element} */
      var layer = document.createElement(args[82]);
      layer.innerHTML = args[108] + highlight(code);
      e.appendChild(layer);
      error(e);
    };
    /**
     * @param {DataView} data
     * @return {undefined}
     */
    Game.prototype.handleSystemMsg = function(data) {
      var elements = String(data);
      this.selfMsg(elements);
    };
    /**
     * @param {DataView} data
     * @return {undefined}
     */
    Game.prototype.handleLogin = function(data) {
      var _0x15447 = data.getUint8(1);
      switch(_0x15447) {
        case 0:
          break;
        case 1:
          alert(args[110]);
          $(args[73]).val(args[6]);
          $(args[74]).val(args[6]);
          close($this);
          break;
      }
      close($(args[76]));
      $(args[73]).focus();
      arr = data.getUint32(2, true);
    };
    /**
     * @param {DataView} data
     * @return {undefined}
     */
    Game.prototype.handleInvite = function(data) {
      if (employees.cAutoDecline) {
        self.sendPacket(new stream.sendInviteResponse(false));
      } else {
        var str = read(data);
        var frag = Class(str + args[111], args[112]);
        /** @type {(HTMLElement|null)} */
        var tbody = document.getElementById(args[113]);
        for (;tbody.firstChild != null;) {
          tbody.removeChild(tbody.firstChild);
        }
        tbody.appendChild(frag);
        close($(args[114]));
      }
    };
    /**
     * @param {DataView} buffer
     * @return {undefined}
     */
    Game.prototype.handlePartyInfo = function(buffer) {
      var hash = {};
      /** @type {Array} */
      var l = [];
      var padLength = buffer.getUint16(buffer.offset, true);
      buffer.offset += 2;
      /** @type {number} */
      var i = 0;
      for (;i < padLength;i++) {
        var r = {};
        var _0x15AA7 = buffer.getUint8(buffer.offset++);
        r.id = buffer.getUint16(buffer.offset, true);
        /** @type {number} */
        hash[r.id] = i;
        buffer.offset += 2;
        if (_0x15AA7 == 1) {
          r.color = args[115];
          this.partyLeader = r.id;
        } else {
          r.color = data.uiForeground;
        }
        r.name = read(buffer) || args[63];
        /** @type {number} */
        r.x = 0;
        /** @type {number} */
        r.y = 0;
        /** @type {number} */
        r.x_ = 0;
        /** @type {number} */
        r.y_ = 0;
        /** @type {number} */
        r.score = 0;
        /** @type {number} */
        r.cache = -1;
        if (this.partyIds[r.id] != null) {
          var t = this.party[this.partyIds[r.id]];
          r.x = t.x;
          r.y = t.y;
          r.x_ = t.x_;
          r.y_ = t.y_;
          r.mmColor = t.mmColor;
        } else {
          r.mmColor = expect(r.id);
        }
        l.push(r);
      }
      /** @type {Array} */
      this.party = l;
      this.partyIds = hash;
      if (padLength > 0) {
        this.drawParty();
      } else {
        this.clearParty();
      }
    };
    /**
     * @param {DataView} data
     * @return {undefined}
     */
    Game.prototype.handlePartyData = function(data) {
      var j = data.getUint16(data.offset, true);
      data.offset += 2;
      if (j != this.party.length) {
        return;
      }
      /** @type {number} */
      var i = 0;
      for (;i < j;i++) {
        var b = this.party[i];
        b.x_ = data.getInt32(data.offset, true);
        data.offset += 4;
        b.y_ = data.getInt32(data.offset, true);
        data.offset += 4;
        b.score = data.getInt32(data.offset, true);
        data.offset += 4;
      }
      this.drawParty();
    };
    /**
     * @param {DataView} data
     * @return {undefined}
     */
    Game.prototype.handlePartyJoinCode = function(data) {
      var elements = String(data);
      var html = String(data);
      this.selfMsgWithJoinCode(elements, html);
    };
    /**
     * @param {DataView} data
     * @return {undefined}
     */
    Game.prototype.handleStats = function(data) {
      var code = data.getUint16(data.offset, true);
      data.offset += 2;
      this.stats.name = read(data) || args[63];
      this.stats.alive += data.getUint32(data.offset, true);
      data.offset += 4;
      this.stats.eatenFood += data.getUint32(data.offset, true);
      data.offset += 4;
      this.stats.eatenEject += data.getUint32(data.offset, true);
      data.offset += 4;
      this.stats.eatenVirus += data.getUint32(data.offset, true);
      data.offset += 4;
      this.stats.eatenPlayer += data.getUint32(data.offset, true);
      data.offset += 4;
      this.stats.gainFood += data.getUint32(data.offset, true);
      data.offset += 4;
      this.stats.gainEject += data.getUint32(data.offset, true);
      data.offset += 4;
      this.stats.gainVirus += data.getUint32(data.offset, true);
      data.offset += 4;
      this.stats.gainPlayer += data.getUint32(data.offset, true);
      data.offset += 4;
      var $suffix = $(args[116]);
      $suffix.empty();
      $suffix.append(args[117] + this.stats.name + args[118] + code + args[119]);
      $suffix.append(args[120] + this.stats.alive + args[121]);
      $suffix.append(args[122] + this.stats.eatenFood + args[118] + this.stats.gainFood + args[119]);
      $suffix.append(args[123] + this.stats.eatenEject + args[118] + this.stats.gainEject + args[119]);
      $suffix.append(args[124] + this.stats.eatenVirus + args[118] + this.stats.gainVirus + args[119]);
      $suffix.append(args[125] + this.stats.eatenPlayer + args[118] + this.stats.gainPlayer + args[119]);
    };
    /**
     * @param {DataView} value
     * @return {undefined}
     */
    Game.prototype.showSubPanel = function(value) {
      /** @type {boolean} */
      options.enabled = true;
      $(args[127]).css(args[2], args[126]);
    };
    /**
     * @return {undefined}
     */
    Game.prototype.sortCells = function() {
      /** @type {Array} */
      this.sorted = [];
      var a;
      var _0x15CC7;
      var i;
      for (i in this.bucket) {
        a = this.bucket[i];
        if (this.sorted.length == 0) {
          this.sorted.push(a);
        } else {
          /** @type {boolean} */
          _0x15CC7 = false;
          /** @type {number} */
          i = 0;
          for (;i < this.sorted.length;i++) {
            var b = this.sorted[i];
            if (a.size > b.size) {
              this.sorted.splice(i, 0, a);
              /** @type {boolean} */
              _0x15CC7 = true;
              break;
            }
          }
          if (!_0x15CC7) {
            this.sorted.push(a);
          }
        }
      }
      /** @type {number} */
      var newScore = 0;
      /** @type {number} */
      var p = 0;
      for (i in this.myCells) {
        a = this.myCells[i];
        newScore += a.getRealMass();
        p++;
      }
      if (newScore > this.score) {
        this.score = newScore;
        $(args[128]).html(this.score);
      }
      $(args[130]).html(p + args[129]);
    };
    /**
     * @return {undefined}
     */
    Game.prototype.drawParty = function() {
      if (module.css(args[2]) == args[3] && el.css(args[2]) != args[3]) {
        module.css(args[2], args[4]);
      }
      /** @type {(HTMLElement|null)} */
      var cMask = document.getElementById(args[131]);
      var context = cMask.getContext(args[12]);
      context.font = args[89];
      /** @type {number} */
      var _ref3 = 0;
      /** @type {number} */
      var width = 0;
      /** @type {number} */
      var i = 0;
      for (;i < this.party.length;i++) {
        var options = this.party[i];
        if (options.cache == -1) {
          options.cache = context.measureText(i + 1 + args[92] + options.name).width;
        }
        if (options.cache > _ref3) {
          _ref3 = options.cache;
        }
        var textWidth = context.measureText(options.score).width;
        if (textWidth > width) {
          width = textWidth;
        }
      }
      cMask.width = 15 + _ref3 + 50 + width;
      /** @type {number} */
      cMask.height = 20 * this.party.length + 5;
      context.font = args[89];
      /** @type {number} */
      var y = 20;
      var x = 5 + _ref3 + 50;
      /** @type {number} */
      i = 0;
      for (;i < this.party.length;i++) {
        options = this.party[i];
        context.fillStyle = options.color;
        context.fillText(i + 1 + args[92] + options.name, 5, y);
        context.fillText(args[6] + options.score, x, y);
        y += 20;
      }
    };
    /**
     * @return {undefined}
     */
    Game.prototype.handleShowScrimmageMenu = function() {
      def.css(args[2], args[4]);
      $(args[86]).css(args[2], args[3]);
    };
    /**
     * @param {DataView} data
     * @return {undefined}
     */
    Game.prototype.handleQueueData = function(data) {
      var text = String(data);
      var memory = data.getUint32(data.offset, true);
      /** @type {(HTMLElement|null)} */
      var can = document.getElementById(args[87]);
      var context = can.getContext(args[12]);
      source.html(args[132]);
      /** @type {number} */
      can.width = 200;
      /** @type {number} */
      can.height = 20 * 2 + 5;
      context.font = args[89];
      /** @type {number} */
      var y = 20;
      context.fillStyle = settings.interfaceForegroundColor;
      context.fillText(args[133] + text, 5, y);
      y += 20;
      context.fillText(args[134] + fire(memory), 5, y);
    };
    /**
     * @param {DataView} data
     * @return {undefined}
     */
    Game.prototype.handleQueueLeave = function(data) {
      var code = String(data);
      /** @type {(HTMLElement|null)} */
      var can = document.getElementById(args[87]);
      var _0x1370F = can.getContext(args[12]);
      /** @type {number} */
      can.width = 0;
      /** @type {number} */
      can.height = 0;
      this.selfMsg(args[135] + code + args[136]);
    };
    /**
     * @param {DataView} data
     * @return {undefined}
     */
    Game.prototype.handleMatchState = function(data) {
      var _0x15EE7 = data.byteLength == 1 ? 0 : data.getUint8(data.offset++);
      if (_0x15EE7 == 0) {
        this.selfMsg(args[137]);
      } else {
        if (_0x15EE7 == 1) {
          $(args[86]).css(args[2], args[4]);
        }
      }
    };
    /**
     * @param {DataView} data
     * @return {undefined}
     */
    Game.prototype.handleScrimmageData = function(data) {
      var _0x154CF = data.getUint8(data.offset++);
      var buffer = $(args[138]);
      var parent = $(args[139]);
      buffer.empty();
      parent.empty();
      for (;_0x154CF > 0;) {
        var id = data.getUint8(data.offset++);
        var html = String(data);
        var content = String(data);
        /** @type {Element} */
        var element = document.createElement(args[140]);
        element.innerHTML = html;
        element.value = id;
        buffer.append(element);
        /** @type {Element} */
        element = document.createElement(args[141]);
        element.innerHTML = content;
        element.id = args[142] + id;
        element.style.display = args[3];
        parent.append(element);
        _0x154CF--;
      }
      buffer.prop(args[143], 0);
      buffer.trigger(args[144]);
    };
    /**
     * @param {boolean} type
     * @return {undefined}
     */
    Player.prototype.setType = function(type) {
      /** @type {boolean} */
      this.type = type;
    };
    /**
     * @param {number} x
     * @return {undefined}
     */
    Player.prototype.setX = function(x) {
      /** @type {number} */
      this.x_ = x;
      /** @type {number} */
      this.x = x;
    };
    /**
     * @param {number} y
     * @return {undefined}
     */
    Player.prototype.setY = function(y) {
      /** @type {number} */
      this.y_ = y;
      /** @type {number} */
      this.y = y;
    };
    /**
     * @param {number} x
     * @return {undefined}
     */
    Player.prototype.updateX = function(x) {
      /** @type {number} */
      this.x_ = x;
    };
    /**
     * @param {number} y
     * @return {undefined}
     */
    Player.prototype.updateY = function(y) {
      /** @type {number} */
      this.y_ = y;
    };
    /**
     * @param {number} size
     * @return {undefined}
     */
    Player.prototype.setSize = function(size) {
      /** @type {number} */
      this.size_ = size;
      /** @type {number} */
      this.size = size;
    };
    /**
     * @return {?}
     */
    Player.prototype.getMass = function() {
      return this.size * this.size / 100 >> 0;
    };
    /**
     * @return {?}
     */
    Player.prototype.getRealMass = function() {
      return this.size_ * this.size_ / 100 >> 0;
    };
    /**
     * @param {number} t
     * @return {undefined}
     */
    Player.prototype.animate = function(t) {
      this.x += Math.round((this.x_ - this.x) * t);
      this.y += Math.round((this.y_ - this.y) * t);
      this.size += Math.round((this.size_ - this.size) * t);
      this.steps--;
    };
    /**
     * @return {?}
     */
    Player.prototype.getSizeCache = function() {
      if (this.sizeCache == null) {
        /** @type {Element} */
        this.sizeCache = document.createElement(args[11]);
      }
      var canvas = this.sizeCache.getContext(args[12]);
      var caracter = args[6] + this.getMass();
      /** @type {number} */
      var y = 72;
      var bgGrad = args[145] + y + args[146];
      canvas.font = bgGrad;
      this.sizeCache.width = canvas.measureText(caracter).width + 4;
      /** @type {number} */
      this.sizeCache.height = Math.floor(y * 1.35);
      canvas.font = bgGrad;
      canvas.fillStyle = args[147];
      canvas.fillText(caracter, 2, y);
      if (employees.cTextOutlines == true) {
        /** @type {number} */
        canvas.lineWidth = 2;
        canvas.strokeStyle = args[148];
        canvas.strokeText(caracter, 2, y);
      }
      return this.sizeCache;
    };
    /**
     * @return {?}
     */
    Player.prototype.getMaskCache = function() {
      if (this.sizeCache == null) {
        /** @type {Element} */
        this.sizeCache = document.createElement(args[11]);
        var context = this.sizeCache.getContext(args[12]);
        /** @type {number} */
        this.sizeCache.width = 64;
        /** @type {number} */
        this.sizeCache.height = 64;
        context.drawImage(images[this.skin], 0, 0, 64, 64);
        context.globalCompositeOperation = args[149];
        context.fillStyle = this.color;
        context.rect(0, 0, 64, 64);
        context.fill();
      }
      return this.sizeCache;
    };
    /**
     * @return {undefined}
     */
    Player.prototype.rainbowTick = function() {
      this.rainbow++;
      if (this.rainbow > 27) {
        /** @type {number} */
        this.rainbow = 0;
      }
    };
    /**
     * @param {CanvasRenderingContext2D} ctx
     * @return {undefined}
     */
    Player.prototype.draw = function(ctx) {
      switch(this.type) {
        case 0:
          break;
        case 1:
          if (this.skin >= 0 && this.skin < images.length) {
            ctx.drawImage(this.getMaskCache(), this.x - this.size, this.y - this.size, this.size * 2, this.size * 2);
          } else {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, angle);
            ctx.fillStyle = this.color;
            ctx.fill();
          }
          break;
        case 2:
          var config = self.playerRegistry.getPlayerById(this.playerId);
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size, 0, angle, false);
          /** @type {number} */
          ctx.globalAlpha = data.alpha;
          ctx.fillStyle = config.cellColor;
          ctx.closePath();
          ctx.fill();
          if (config.skin != null && !employees.cHideSkins) {
            ctx.save();
            ctx.clip();
            try {
              var copy = obj[config.skin];
              if (copy.complete && copy.width > 0) {
                ctx.drawImage(copy, this.x - this.size, this.y - this.size, this.size * 2, this.size * 2);
              }
            } catch (e) {
            }
            ctx.restore();
          }
          if ((config.flags & 1) == 1) {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size + 16, 0, angle, false);
            ctx.strokeStyle = args[150];
            /** @type {number} */
            ctx.lineWidth = 8;
            ctx.closePath();
            ctx.stroke();
          }
          /** @type {number} */
          ctx.globalAlpha = 1;
          var y = this.y;
          if (config.lowerName == true) {
            y += Math.floor(this.size / 2);
          }
          if (!employees.cHideNames) {
            var previewImage = config.getNameCache();
            /** @type {number} */
            var scale = Math.max(0.0025 * this.size, 0.2);
            /** @type {number} */
            var width = previewImage.width * scale;
            /** @type {number} */
            var h = previewImage.height * scale;
            ctx.drawImage(previewImage, this.x - Math.floor(width / 2), y - Math.floor(h / 2), width, h);
          }
          if (employees.cShowMass == true && (this.playerId == self.playerId || self.partyIds[this.playerId] != null)) {
            var image = this.getSizeCache();
            /** @type {number} */
            scale = Math.max(0.0025 * this.size, 0.2);
            /** @type {number} */
            width = image.width * scale;
            /** @type {number} */
            h = image.height * scale;
            ctx.drawImage(image, this.x - Math.floor(width / 2), y + Math.floor(h / 2), width, h);
          }
          break;
        case 3:
          /** @type {number} */
          ctx.globalAlpha = data.alpha;
          if (myImage.complete) {
            ctx.drawImage(myImage, this.x - this.size, this.y - this.size, this.size * 2, this.size * 2);
          } else {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI, false);
            ctx.fillStyle = this.color;
            ctx.fill();
          }
          /** @type {number} */
          ctx.globalAlpha = 1;
          break;
        case 4:
          /** @type {number} */
          ctx.globalAlpha = data.alpha;
          if (img.complete) {
            ctx.drawImage(img, this.x - this.size, this.y - this.size, this.size * 2, this.size * 2);
          } else {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, angle);
            ctx.fillStyle = this.color;
            ctx.fill();
          }
          /** @type {number} */
          ctx.globalAlpha = 1;
          break;
      }
    };
    /**
     * @param {Object} ctx
     * @return {undefined}
     */
    Player.prototype.drawSimple = function(ctx) {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, angle);
      ctx.fillStyle = this.color;
      ctx.fill();
    };
    /**
     * @return {?}
     */
    EventEmitter.prototype.connectionStart = function() {
      var udataCur = args[152] + version;
      /** @type {ArrayBuffer} */
      var buffer = new ArrayBuffer(1 + udataCur.length + 1);
      /** @type {DataView} */
      var data = new DataView(buffer);
      data.setUint8(0, 255);
      emit(1, data, udataCur);
      return buffer;
    };
    /**
     * @param {string} val
     * @return {?}
     */
    EventEmitter.prototype.setName = function(val) {
      /** @type {ArrayBuffer} */
      var buffer = new ArrayBuffer(1 + (val.length + 1) * 2);
      /** @type {DataView} */
      var view = new DataView(buffer);
      view.setUint8(0, 0);
      set(1, view, val);
      return buffer;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    EventEmitter.prototype.sendKey = function(value) {
      /** @type {ArrayBuffer} */
      var buffer = new ArrayBuffer(1);
      /** @type {DataView} */
      var view = new DataView(buffer);
      view.setUint8(0, value);
      return buffer;
    };
    /**
     * @param {?} value
     * @param {?} cmd
     * @return {?}
     */
    EventEmitter.prototype.sendMouse = function(value, cmd) {
      /** @type {ArrayBuffer} */
      var buffer = new ArrayBuffer(5);
      /** @type {DataView} */
      var view = new DataView(buffer);
      view.setUint8(0, 16);
      view.setInt16(1, value, true);
      view.setInt16(3, cmd, true);
      return buffer;
    };
    /**
     * @return {?}
     */
    EventEmitter.prototype.sendPing = function() {
      /** @type {ArrayBuffer} */
      var buffer = new ArrayBuffer(1);
      /** @type {DataView} */
      var view = new DataView(buffer);
      view.setUint8(0, 71);
      return buffer;
    };
    /**
     * @return {?}
     */
    EventEmitter.prototype.sendSpectate = function() {
      /** @type {ArrayBuffer} */
      var buffer = new ArrayBuffer(1);
      /** @type {DataView} */
      var view = new DataView(buffer);
      view.setUint8(0, 1);
      return buffer;
    };
    /**
     * @param {string} val
     * @param {?} value
     * @return {?}
     */
    EventEmitter.prototype.sendChat = function(val, value) {
      /** @type {ArrayBuffer} */
      var buffer = new ArrayBuffer(1 + 1 + (val.length + 1) * 2);
      /** @type {DataView} */
      var view = new DataView(buffer);
      view.setUint8(0, 72);
      view.setUint8(1, value);
      set(2, view, val);
      return buffer;
    };
    /**
     * @param {?} value
     * @param {string} methodNames
     * @param {string} haystack
     * @return {?}
     */
    EventEmitter.prototype.sendLogin = function(value, methodNames, haystack) {
      /** @type {ArrayBuffer} */
      var buffer = new ArrayBuffer(1 + 2 + methodNames.length + haystack.length);
      /** @type {DataView} */
      var data = new DataView(buffer);
      data.setUint8(0, value);
      emit(1, data, methodNames);
      emit(2 + methodNames.length, data, haystack);
      return buffer;
    };
    /**
     * @param {boolean} isRoot
     * @return {?}
     */
    EventEmitter.prototype.sendInviteResponse = function(isRoot) {
      /** @type {ArrayBuffer} */
      var buffer = new ArrayBuffer(2);
      /** @type {DataView} */
      var view = new DataView(buffer);
      view.setUint8(0, 41);
      view.setUint8(1, isRoot ? 1 : 0);
      return buffer;
    };
    /**
     * @param {?} value
     * @param {?} val
     * @return {?}
     */
    EventEmitter.prototype.sendPartyAction = function(value, val) {
      /** @type {ArrayBuffer} */
      var buffer = new ArrayBuffer(6);
      /** @type {DataView} */
      var view = new DataView(buffer);
      view.setUint8(0, 40);
      view.setUint8(1, value);
      view.setUint32(2, val, true);
      return buffer;
    };
    /**
     * @param {string} methodNames
     * @return {?}
     */
    EventEmitter.prototype.sendPartyJoin = function(methodNames) {
      /** @type {ArrayBuffer} */
      var buffer = new ArrayBuffer(1 + methodNames.length + 1);
      /** @type {DataView} */
      var data = new DataView(buffer);
      data.setUint8(0, 42);
      emit(1, data, methodNames);
      return buffer;
    };
    /**
     * @param {?} value
     * @param {string} val
     * @return {?}
     */
    EventEmitter.prototype.sendWhisper = function(value, val) {
      /** @type {ArrayBuffer} */
      var buffer = new ArrayBuffer(5 + (val.length + 1) * 2);
      /** @type {DataView} */
      var view = new DataView(buffer);
      view.setUint8(0, 73);
      view.setUint32(1, value, true);
      set(5, view, val);
      return buffer;
    };
    /**
     * @return {?}
     */
    EventEmitter.prototype.sendSubPanel = function() {
      /** @type {ArrayBuffer} */
      var data = new ArrayBuffer(1 + 6 + (options.skinName.length + 1));
      /** @type {DataView} */
      var test = new DataView(data);
      test.setUint8(0, 10);
      test.setUint8(1, options.nameColor.r);
      test.setUint8(2, options.nameColor.g);
      test.setUint8(3, options.nameColor.b);
      test.setUint8(4, options.chatColor);
      test.setUint8(5, 0);
      test.setUint8(6, options.lowerName ? 1 : 0);
      emit(7, test, options.skinName);
      return data;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    EventEmitter.prototype.sendQueue = function(value) {
      /** @type {ArrayBuffer} */
      var buffer = new ArrayBuffer(1 + 4);
      /** @type {DataView} */
      var view = new DataView(buffer);
      view.setUint8(0, 80);
      view.setUint8(1, value);
      view.setUint8(2, 0);
      view.setUint16(3, 0);
      return buffer;
    };
    /**
     * @return {?}
     */
    EventEmitter.prototype.sendLeaveMatch = function() {
      /** @type {ArrayBuffer} */
      var buffer = new ArrayBuffer(1);
      /** @type {DataView} */
      var view = new DataView(buffer);
      view.setUint8(0, 81);
      return buffer;
    };
    var ca = {
      /**
       * @return {undefined}
       */
      "cHideId" : function() {
        var meterPos = employees.cHideId ? args[3] : args[4];
        $(args[192]).css(args[2], meterPos);
      },
      /**
       * @return {undefined}
       */
      "cHideServerDisplay" : function() {
        var meterPos = employees.cHideServerDisplay ? args[3] : args[4];
        $(args[193]).css(args[2], meterPos);
      },
      /**
       * @return {undefined}
       */
      "cTransCells" : function() {
        /** @type {number} */
        data.alpha = employees.cTransCells ? 0.5 : 1;
      },
      /**
       * @return {undefined}
       */
      "cHideChat" : function() {
        var meterPos = employees.cHideChat ? args[3] : args[4];
        $(args[194]).css(args[2], meterPos);
      },
      /**
       * @return {undefined}
       */
      "cHideMinimap" : function() {
        var meterPos = employees.cHideMinimap ? args[3] : args[4];
        $(args[195]).css(args[2], meterPos);
      },
      /**
       * @return {undefined}
       */
      "cHideCoordinates" : function() {
        var meterPos = employees.cHideCoordinates ? args[3] : args[4];
        $(args[57]).css(args[2], meterPos);
        done();
      },
      /**
       * @return {undefined}
       */
      "cDisableAutoZoom" : function() {
        if (employees.cDisableAutoZoom) {
          /** @type {number} */
          self.scale_base = 0.25 * Math.max(node.height / 1080, node.width / 1920);
        }
      },
      /**
       * @return {undefined}
       */
      "cUiEnabled" : function() {
        append();
      }
    };
    /**
     * @param {Event} cm
     * @return {undefined}
     */
    var clear = function(cm) {
      var el = this.cloneNode();
      el.getContext(args[12]).drawImage(this, 0, 0);
      reset(cm, el, this.dataset.playerId, -1);
    };
    /**
     * @param {Event} e
     * @return {undefined}
     */
    var start = function(e) {
      /** @type {number} */
      var name = Math.floor(e.layerY / 20);
      if (e.layerY % 20 <= 4) {
        return;
      }
      var set = self.party[name];
      if (set == null) {
        return;
      }
      var failuresLink = Class(set.name, args[147]);
      reset(e, failuresLink, set.id, name);
    };
    /** @type {Array} */
    var stack = [];
    /** @type {number} */
    var offset = 0;
    for (;offset < 180;offset++) {
      var flatColor = tinycolor({
        h : offset * 2,
        s : 97.25,
        v : 100
      });
      stack[offset] = flatColor.toHexString();
    }
    var codeSegments = repeat(stack.slice(0));
    /** @type {Array} */
    var _0x144DF = [args[276], args[277], args[278], args[279], args[280], args[281], args[282], args[283], args[91], args[284], args[285], args[286], args[287], args[288], args[289], args[290], args[291], args[292], args[293], args[294], args[295], args[296], args[297], args[298], args[299], args[300], args[301], args[302]];
    /** @type {Array} */
    var resultItems = [args[112], args[303], args[304], args[276], args[305], args[306], args[91], args[287], args[307], args[289], args[115], args[308], args[291], args[309], args[310], args[311], args[312]];
    /** @type {Array} */
    var ps = [args[313], args[314], args[315], args[316], args[317], args[318], args[319], args[320], args[321], args[322], args[323], args[324], args[325], args[326], args[327], args[328], args[329], args[330], args[331], args[332], args[333], args[334], args[335], args[336], args[337], args[338], args[339], args[340], args[341], args[342], args[343], args[344], args[345], args[346], args[347], args[348], args[349], args[350], args[351], args[352], args[353], args[354], args[355], args[356], args[357]];
    /** @type {Array} */
    var path = [args[358], args[359], args[360], args[361]];
    /** @type {Array} */
    var RGB_YUV_TABLE = [args[199], args[362], args[363], args[364], args[365], args[366], args[367], args[368], args[369], args[370], args[371], args[372], args[373], args[374], args[375], args[376]];
    /** @type {Array} */
    var m = [args[6], args[6], args[6], args[377], args[6], args[6], args[378], args[6], args[379], args[380], args[6], args[6], args[381], args[382], args[383], args[6], args[384], args[385], args[386], args[387], args[388], args[389], args[390], args[391], args[392], args[393], args[6], args[394], args[395], args[396], args[397], args[398], args[399], args[400], args[401], args[402], args[403], args[404], args[405], args[406], args[407], args[408], args[409], args[410], args[411], args[412], args[413], 
    args[6], args[199], args[362], args[363], args[364], args[365], args[366], args[367], args[368], args[369], args[370], args[75], args[414], args[415], args[416], args[417], args[418], args[419], args[371], args[372], args[373], args[374], args[375], args[376], args[420], args[421], args[422], args[423], args[424], args[425], args[426], args[427], args[428], args[429], args[430], args[431], args[432], args[433], args[434], args[435], args[436], args[437], args[438], args[439], args[440], args[6], 
    args[441], args[6], args[442], args[443], args[444], args[445], args[446], args[447], args[448], args[449], args[450], args[451], args[452], args[453], args[454], args[455], args[456], args[457], args[458], args[459], args[460], args[461], args[462], args[463], args[464], args[465], args[466], args[467], args[468], args[469], args[470], args[471], args[472], args[473], args[474], args[475], args[476], args[477], args[478], args[479], args[480], args[481], args[482], args[6], args[6], args[6], 
    args[6], args[6], args[6], args[6], args[6], args[483], args[484], args[485], args[486], args[487], args[488], args[489], args[6], args[6], args[6], args[6], args[6], args[6], args[6], args[6], args[6], args[490], args[491], args[492], args[493], args[494], args[495], args[496], args[497], args[498], args[499], args[500], args[501], args[502], args[503], args[504], args[505], args[506], args[6], args[6], args[6], args[6], args[507], args[508], args[509], args[6], args[6], args[510], args[511], 
    args[512], args[513], args[514], args[515], args[516], args[6], args[6], args[6], args[6], args[6], args[6], args[6], args[6], args[6], args[6], args[6], args[6], args[6], args[6], args[6], args[6], args[6], args[6], args[6], args[6], args[6], args[6], args[6], args[6], args[6], args[6], args[517], args[518], args[519], args[520], args[6], args[521], args[522], args[6], args[523], args[524], args[6], args[525], args[6], args[6], args[526], args[527], args[528], args[529], args[530], args[531], 
    args[532], args[533], args[534], args[535], args[536], args[537], args[538], args[539], args[540], args[541], args[542], args[543], args[544], args[6], args[545], args[546], args[6]];
    /** @type {Array} */
    var images = [args[547], args[548], args[549], args[550], args[551], args[552], args[553], args[554], args[555], args[556], args[557], args[558], args[559], args[560], args[561]];
    var model = new Model;
    load(args[569], loaded);
    run();
  }
  /** @type {Array} */
  var args = ["1.4.5", "#", "display", "none", "block", "#main-side", "", "#121212", "rgba(170,170,170)", "rgba(23, 22, 23, .9)", "rgba(255, 255, 255, 1)", "canvas", "2d", "#main", "#party-panel", ".hud-panel", "#main-scrimmage", "#context-menu", "#chat-input", "#leaderboard-header", ":focus", "mousewheel DOMMouseScroll", "contextmenu", "touchstart", "touchmove", "POST", "json", "http://gota.io/api/?servers", "/", "zln04k70r03y", ".color-description", ".color-dot", "http://gota.io/api/?countrycode", 
  "continent", "eu", "Vendetta", "&", "GET", "jsonp", "https://gamedata.gota.io/skinData.php", "get", "Text status: ", "Error thrown: ", "#cUiForegroundColor", "#cUiBackgroundColor", "#cGameBackground", "#cGridColor", "Welcome to Gota.io!", "transparent", "color", "set", ".interface-color", ".main-cover", ".gota-btn", ".popup-panel", ".main-version", "#playerFps", ".coordinates", "X: ", " Y: ", "minimap-canvas", "12px Calibri", "#fefefe", "An unnamed cell", "No server selected!", "#name-box", "#playerServer", 
  "send", "event", "Game", "webMenu", "Play", "Spectate", "#id-box", "#pw-box", ":", "#popup-login", "ws://", "arraybuffer", "Error connecting to server... Retrying every second.", "#playerId", "td", "span", "#DDDD00", "[System] ", "all", "#scrimmage-btn-leave", "leaderboard-canvas", "Leaderboard", "16px Calibri", "#FFAAAA", "#FFFF00", ". ", "#00ff00", "#playerPing", "#ffff00", "#ff6600", "#ff0000", "ms", "rgb(", ",", ")", "Party", "Admin", "All", " - ", "[", "] ", ": ", " > ", "Invalid id or password!", 
  " has invited you to a party.", "#FFFFFF", "popup-party-text", "#popup-party", "#00FFFF", "#main-stats", "<span>Name: ", " (", ")</span><br>", "<span>Alive: ", "</span><br>", "<span>Food eaten: ", "<span>Ejected mass eaten: ", "<span>Viruses eaten: ", "<span>Player cells eaten: ", "inline-block", "#btn-subpanel", "#playerScore", "/16", "#playerCells", "party-canvas", "Queue", "Mode: ", "Time: ", "You have left the queue for [", "]", "A match has been found. Good luck and have fun!", "#scrimmage-mode-select", 
  "#scrimmage-mode-info", "option", "div", "scrimmage-info-", "selectedIndex", "change", "bold ", "pt Verdana", "#fff", "#000", "source-in", "#808080", "#aaa", "Gota Web ", "https://gamedata.gota.io/skins/", ".png", "error", "click", "region", ".server-tab", "undefined", "#btn-play", "#btn-spec", ".checkbox-options", "#btn-login", "#btn-cancel", "#btn-accept", "#btn-decline", "selected", "#menu-invite", "/t ", " ", "#menu-whisper", "party", "#menu-promote", "#menu-kick", "INPUT", "beforeunload", 
  "Are you sure you want to leave Gota.io?", "y", "#chat-container", "#btn-updateSP", "keybinds-btn-selected", ".keybinds-btn", "#btn-keybinds-clear", "#scrimmage-info-", "#btn-queue", "#btn-leave-match", ".keybinds-btn-selected", "id", "images/spike.png", "images/spike_mother.png", "images/ejectedmass_skins/", ".pID", ".psvr", "#chat-panel", "#minimap-panel", "2px solid rgba(255, 255, 255, .2)", "#minimap-canvas", "270px", "0", "250px", "#btn-discord", "rgb", "#spNameColor", "#spChatColor", "#spSkinName", 
  "checked", "#spLowerName", "#servers-body-eu", "#servers-body-na", "#servers-body-ap", '<tr id="s_', '" class="server-row" server="', '"><td class="server-table-name">', '</td><td class="server-table-players">', '</td><td class="server-table-mode"><div class="table-overflowfix">', "</div></td></tr>", "#servers-body-", "server", ".server-row", "server-selected", "#s_", "#server-tab-", "server-active", "#server-tab-container", "#server-content", "#servers-", "#chat-body tr", "#chat-body tr:first-child", 
  "tr", "chat-body", "scrollTo", "last", "Invalid player id.", "/t", "/r ", "/r", "/p ", "/p", "/invite", "Invalid id.", "/i", "/leave", "/promote", "/kick", "/clear", "Your id is ", "You need to be connected to a server to use this command.", "/info", "/queue", "/scrimmenu", "Attempting to disconnect from server...", "/dc", "/join", "/private", "/public", "Invalid command!", "context-name", ".context-action", "left", "top", "&gt;", "&lt;", "pt Times New Roman", "opacity", "options", "keybinds", 
  "name", "interfaceOptions", "subpanel", '<img src="https://gamedata.gota.io/emotes/', '.png" height="17" width="17" alt="', '">', '<img src="https://gamedata.gota.io/emotes/gifs/', '.gif" height="17" width="17" alt="', "images/event/balloons.png", "#FF0000", "#FF2000", "#FF4000", "#FF6000", "#FF8000", "#FFA000", "#FFC000", "#FFE000", "#C0FF00", "#80FF00", "#40FF00", "#00FF00", "#00CF40", "#008080", "#0020C0", "#0000FF", "#1200C0", "#250080", "#380040", "#4B0082", "#5C00A1", "#6D00C0", "#7E00DF", 
  "#8F00E1", "#AB00C0", "#C70080", "#E30040", "#FF9BDC", "#FF00FF", "#C80000", "#FF6900", "#008000", "#0096FF", "#CA48FA", "#8A2BE2", "#D2C878", "#8C4614", "4Head", "BibleThump", "cat", "DansGame", "DatSheffy", "FailFish", "FeelsBadMan", "FeelsGoodMan", "FeelsMadMan", "GabeN", "HassanChop", "HeyGuys", "Kappa", "KappaPride", "Keepo", "Kreygasm", "NotLikeThis", "OMGScoots", "PJSalt", "PogChamp", "rekt", "rip", "SaltyCorn", "sodaC", "sodaHeyGuys", "sodaNOPE", "sodaW", "sodaWut", "SwiftRage", "WutFace", 
  "ResidentSleeper", "GotaGabeN", "LUL", ":eptic:", ":xnite:", ":focus:", ":fades:", ":miku:", ":animoo:", ":jiji:", ":shiney:", ":devil:", ":mikasa:", ":ophis:", ":zevran:", "Ditto", "MichaelPls", "RareParrot", "PepePls", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "CANCEL", "HELP", "BACK_SPACE", "TAB", "CLEAR", "ENTER", "ENTER_SPECIAL", "SHIFT", "CONTROL", "ALT", "PAUSE", "CAPS_LOCK", "KANA", "EISU", "JUNJA", "FINAL", "HANJA", "ESCAPE", "CONVERT", "NONCONVERT", "ACCEPT", 
  "MODECHANGE", "SPACE", "PAGE_UP", "PAGE_DOWN", "END", "HOME", "LEFT", "UP", "RIGHT", "DOWN", "SELECT", "PRINT", "EXECUTE", "PRINTSCREEN", "INSERT", "DELETE", ";", "<", "=", ">", "?", "AT", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "OS_KEY", "CONTEXT_MENU", "SLEEP", "NUMPAD0", "NUMPAD1", "NUMPAD2", "NUMPAD3", "NUMPAD4", "NUMPAD5", "NUMPAD6", "NUMPAD7", "NUMPAD8", "NUMPAD9", "MULTIPLY", "ADD", "SEPARATOR", "SUBTRACT", "DECIMAL", "DIVIDE", 
  "F1", "F2", "F3", "F4", "F5", "F6", "F7", "F8", "F9", "F10", "F11", "F12", "F13", "F14", "F15", "F16", "F17", "F18", "F19", "F20", "F21", "F22", "F23", "F24", "NUM_LOCK", "SCROLL_LOCK", "WIN_OEM_FJ_JISHO", "WIN_OEM_FJ_MASSHOU", "WIN_OEM_FJ_TOUROKU", "WIN_OEM_FJ_LOYA", "WIN_OEM_FJ_ROYA", "CIRCUMFLEX", "EXCLAMATION", "DOUBLE_QUOTE", "HASH", "DOLLAR", "PERCENT", "AMPERSAND", "UNDERSCORE", "OPEN_PAREN", "CLOSE_PAREN", "ASTERISK", "PLUS", "PIPE", "HYPHEN_MINUS", "OPEN_CURLY_BRACKET", "CLOSE_CURLY_BRACKET", 
  "TILDE", "VOLUME_MUTE", "VOLUME_DOWN", "VOLUME_UP", "SEMICOLON", "EQUALS", "COMMA", "MINUS", "PERIOD", "SLASH", "BACK_QUOTE", "OPEN_BRACKET", "BACK_SLASH", "CLOSE_BRACKET", "QUOTE", "META", "ALTGR", "WIN_ICO_HELP", "WIN_ICO_00", "WIN_ICO_CLEAR", "WIN_OEM_RESET", "WIN_OEM_JUMP", "WIN_OEM_PA1", "WIN_OEM_PA2", "WIN_OEM_PA3", "WIN_OEM_WSCTRL", "WIN_OEM_CUSEL", "WIN_OEM_ATTN", "WIN_OEM_FINISH", "WIN_OEM_COPY", "WIN_OEM_AUTO", "WIN_OEM_ENLW", "WIN_OEM_BACKTAB", "ATTN", "CRSEL", "EXSEL", "EREOF", "PLAY", 
  "ZOOM", "PA1", "WIN_OEM_CLEAR", "heart", "star", "home", "apple", "spiral", "dice", "chicken", "ghost", "burger", "bow", "cloud", "skull", "mug", "flower", "music", "0:00", "preroll", "head", "script", "async", "text/javascript", "UTF-8", "//api.adinplay.com/player/v2/GOT/gota.io/player.min.js"];
  /** @type {function (?): undefined} */
  showSideMenu = positionDialog;
  /** @type {function (): undefined} */
  hideSideMenu = show;
  version = args[0];
  $(init);
});
