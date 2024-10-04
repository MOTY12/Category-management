/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./app/routes/index.ts":
/*!*****************************!*\
  !*** ./app/routes/index.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.routeBase = exports.BASE_PATH = void 0;
__exportStar(__webpack_require__(/*! ./v1 */ "./app/routes/v1/index.ts"), exports);
exports.BASE_PATH = "/api";
exports.routeBase = {
    V1_PATH: "".concat(exports.BASE_PATH, "/v1"),
};


/***/ }),

/***/ "./app/routes/v1/index.ts":
/*!********************************!*\
  !*** ./app/routes/v1/index.ts ***!
  \********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Router = void 0;
var express_1 = __importDefault(__webpack_require__(/*! express */ "express"));
var appRouter = express_1.default.Router();
exports.Router = appRouter;


/***/ }),

/***/ "./config/env/development.ts":
/*!***********************************!*\
  !*** ./config/env/development.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var dotenv_1 = __webpack_require__(/*! dotenv */ "dotenv");
(0, dotenv_1.configDotenv)();
var development = {};
exports["default"] = development;


/***/ }),

/***/ "./config/env/index.ts":
/*!*****************************!*\
  !*** ./config/env/index.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var development_1 = __importDefault(__webpack_require__(/*! ./development */ "./config/env/development.ts"));
var test_1 = __importDefault(__webpack_require__(/*! ./test */ "./config/env/test.ts"));
var production_1 = __importDefault(__webpack_require__(/*! ./production */ "./config/env/production.ts"));
var dotenv_1 = __webpack_require__(/*! dotenv */ "dotenv");
var staging_1 = __importDefault(__webpack_require__(/*! ./staging */ "./config/env/staging.ts"));
(0, dotenv_1.configDotenv)();
var defaults = {
    PORT: "3009",
    API_VERSION: "v1",
    DB_URL: "postgresql://postgres:admin@localhost:5432/enyata",
};
var config = {
    development: __assign(__assign({}, defaults), development_1.default),
    test: __assign(__assign({}, defaults), test_1.default),
    staging: __assign(__assign({}, defaults), staging_1.default),
    production: __assign(__assign({}, defaults), production_1.default)
}["development" || 0];
exports["default"] = config;


/***/ }),

/***/ "./config/env/production.ts":
/*!**********************************!*\
  !*** ./config/env/production.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var production = {};
exports["default"] = production;


/***/ }),

/***/ "./config/env/staging.ts":
/*!*******************************!*\
  !*** ./config/env/staging.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var dotenv_1 = __webpack_require__(/*! dotenv */ "dotenv");
(0, dotenv_1.configDotenv)();
var staging = {};
exports["default"] = staging;


/***/ }),

/***/ "./config/env/test.ts":
/*!****************************!*\
  !*** ./config/env/test.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var testing = {};
exports["default"] = testing;


/***/ }),

/***/ "./config/express.ts":
/*!***************************!*\
  !*** ./config/express.ts ***!
  \***************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports["default"] = App;
var express_1 = __importDefault(__webpack_require__(/*! express */ "express"));
var express_fileupload_1 = __importDefault(__webpack_require__(/*! express-fileupload */ "express-fileupload"));
var helmet_1 = __importDefault(__webpack_require__(/*! helmet */ "helmet"));
var cors_1 = __importDefault(__webpack_require__(/*! cors */ "cors"));
var routes_1 = __webpack_require__(/*! ../app/routes */ "./app/routes/index.ts");
var error_1 = __webpack_require__(/*! ../utils/error */ "./utils/error/index.ts");
var http_1 = __importDefault(__webpack_require__(/*! http */ "http"));
var env_1 = __importDefault(__webpack_require__(/*! ../utils/env/env */ "./utils/env/env.ts"));
function App() {
    var app = (0, express_1.default)();
    var developmentCorsUrls = [
        "*",
        "http://localhost:5173",
        "http://localhost:5174",
        "".concat(env_1.default.get("COMPLIANCE_CLIENT_URL")),
        "".concat(env_1.default.get("COMPLIANCE_CLIENT_ORGANIZATION_URL")),
        "".concat(env_1.default.get("COMPLIANCE_ORGANIZATION_DEMO_CLIENT_URL")),
        "".concat(env_1.default.get("COMPLIANCE_ADMIN_DEMO_CLIENT_URL")),
    ];
    var corsUrls = __spreadArray([], (env_1.default.get("COMPLIANCE_NODE_ENV") === "production" ? [] : developmentCorsUrls), true);
    var corsOptions = {
        origin: corsUrls,
        credentials: true
    };
    app.use((0, cors_1.default)(corsOptions));
    app.use((0, helmet_1.default)());
    app.use(express_1.default.json({ limit: '50mb' }));
    app.use(express_1.default.urlencoded({ limit: '50mb', extended: true }));
    app.use((0, express_fileupload_1.default)({
        limits: { fileSize: 52428800 }
    }));
    app.disable("x-powered-by");
    app.use(routes_1.routeBase.V1_PATH, routes_1.Router);
    app.get("/", function (req, res) {
        res.send("App API running server running");
    });
    // Handles exceptions thrown in the application
    app.use(error_1.ApiError.appError);
    // handle all error instances and returns an errors response
    // eslint-disable-next-line no-unused-vars
    app.use(error_1.ApiError.genericError);
    var server = http_1.default.createServer(app);
    return server;
}


/***/ }),

/***/ "./config/logger/index.ts":
/*!********************************!*\
  !*** ./config/logger/index.ts ***!
  \********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
/* istanbul ignore file */
/* eslint-disable implicit-arrow-linebreak */
var winston_1 = __importDefault(__webpack_require__(/*! winston */ "winston"));
var fs_1 = __importDefault(__webpack_require__(/*! fs */ "fs"));
var env_1 = __importDefault(__webpack_require__(/*! ../../utils/env/env */ "./utils/env/env.ts"));
var app_root_path_1 = __importDefault(__webpack_require__(/*! app-root-path */ "../../../node_modules/app-root-path/index.js"));
var _a = winston_1.default.format, combine = _a.combine, label = _a.label, timestamp = _a.timestamp, colorize = _a.colorize, printf = _a.printf;
/**
 * getLogToProcess - gets log of process
 * @param {env} env env variables
 * @param {fileOpt} fileOpt file options
 * @param {consoleOpt} consoleOpt console options
 * @returns {Array} - Array of all log processess
 */
var getLogToProcess = function (env, fileOpt, consoleOpt) {
    var array = [];
    if (env === "test" || env === "development") {
        array.push(new winston_1.default.transports.File(fileOpt), new winston_1.default.transports.Console(consoleOpt));
        return array;
    }
    // const papertrailConnection = new PapertrailConnection({
    //     host: `${Env.get<string>("PAPERTRAIL_URL")}`.split("\r")[0],
    //     port: Env.get<string>("PAPERTRAIL_PORT"),
    //     hostname: `${Env.get<string>("API_SERVICE_NAME")}`,
    // });
    array.push(new winston_1.default.transports.File(fileOpt), new winston_1.default.transports.Console(consoleOpt));
    return array;
};
/**
 * @Class Logger class
 * Defines all the necessary attributes and properties of
 * all log information
 */
var Logger = /** @class */ (function () {
    function Logger(options) {
        this.logDir = options.logDirPath || "".concat(app_root_path_1.default, "/logs");
        this.label = options.label || "log";
        this._commonOptions = {
            console: {
                level: "debug",
                handleExceptions: true,
                format: combine(colorize({ all: true }), printf(function (msg) {
                    return "[".concat(new Date(msg.timestamp).toUTCString(), "]: ").concat(msg.label, " : - ").concat(msg.level, ": ").concat(msg.message);
                })),
            },
            file: {
                level: "debug",
                filename: "".concat(this.logDir, "/app.log"),
                handleExceptions: true,
                maxsize: 5242880,
                maxFiles: 2000,
                format: winston_1.default.format.json(),
            },
        };
        this.debugMode =
            options.debugMode === true || options.debugMode === undefined;
        this.environment =
            env_1.default.get("NODE_ENV") || "development";
    }
    /**
     * _getTransport - private get transport method
     * @returns getLogToProcess, fileOptions, consoleOptions
     * @memberof Logger
     * @private
     */
    Logger.prototype._getTransports = function () {
        var _a = this._commonOptions, console = _a.console, file = _a.file;
        var level = this.debugMode ? "debug" : "info";
        if (this.environment === "production" && this.debugMode)
            level = "error";
        var consoleOpt = __assign(__assign({}, console), { level: level });
        var fileOpt = __assign(__assign({}, file), { filename: "".concat(this.logDir, "/app.").concat(this.environment, ".log") });
        return getLogToProcess(env_1.default.get("PAPERTRAIL_PORT"), fileOpt, consoleOpt);
    };
    /**
     * init - initializes a logger class
     * @returns Logger instance
     * @private
     * @memberof Logger
     */
    Logger.prototype.init = function () {
        if (!fs_1.default.existsSync(this.logDir))
            fs_1.default.mkdirSync(this.logDir);
        var logger = winston_1.default.createLogger({
            format: combine(timestamp(), label({
                label: this.label,
            })),
            transports: this._getTransports(),
            exitOnError: false,
        });
        logger.stream = {
            write: function (message) {
                logger.info(message);
            },
        };
        return logger;
    };
    /**
     * createLogger - creates a logger
     * @param {options} options - options needed for creating logger
     * @returns A new instance of logger
     * @memberof Logger
     * @public
     */
    Logger.createLogger = function (options) {
        var loggerInstance = new Logger(options);
        return loggerInstance.init();
    };
    return Logger;
}());
var logger = Logger.createLogger({ label: "CORE_V1" });
exports["default"] = logger;


/***/ }),

/***/ "./index.ts":
/*!******************!*\
  !*** ./index.ts ***!
  \******************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var env_validator_1 = __webpack_require__(/*! ./utils/env/env.validator */ "./utils/env/env.validator.ts");
var env_1 = __importDefault(__webpack_require__(/*! ./utils/env/env */ "./utils/env/env.ts"));
var logger_1 = __importDefault(__webpack_require__(/*! ./config/logger */ "./config/logger/index.ts"));
// import { connectDB } from "./config/database";
var express_1 = __importDefault(__webpack_require__(/*! ./config/express */ "./config/express.ts"));
var enums_1 = __webpack_require__(/*! ./utils/enums */ "./utils/enums/index.ts");
// import redisHelper from "./utils/helpers/redis.helpers";
function main(App) {
    return __awaiter(this, void 0, void 0, function () {
        var app, PORT_1, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    // run the following three before initializing App function
                    return [4 /*yield*/, env_1.default.validateEnv(env_validator_1.envValidatorSchema)];
                case 1:
                    // run the following three before initializing App function
                    _a.sent();
                    app = App();
                    PORT_1 = env_1.default.get("PORT") || 3002;
                    logger_1.default.info("Server started on port ".concat(PORT_1, " ...."));
                    // start server
                    app.listen(PORT_1, function () {
                        var NODE_ENV = env_1.default.get("NODE_ENV");
                        // redisHelper.setUp();
                        logger_1.default.info("Server started");
                        NODE_ENV !== enums_1.AppEnv.PRODUCTION &&
                            logger_1.default.info("[server]: Server is running at http://localhost:".concat(PORT_1, ". Socket server on ws://localhost:3002"));
                    });
                    return [3 /*break*/, 3];
                case 2:
                    error_1 = _a.sent();
                    logger_1.default.error("Error: Error occurred while starting server", error_1);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
main(express_1.default);


/***/ }),

/***/ "./utils/enums/index.ts":
/*!******************************!*\
  !*** ./utils/enums/index.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppEnv = void 0;
var AppEnv;
(function (AppEnv) {
    AppEnv["PRODUCTION"] = "production";
    AppEnv["STAGING"] = "staging";
    AppEnv["DEVELOPMENT"] = "development";
    AppEnv["TEST"] = "test";
})(AppEnv || (exports.AppEnv = AppEnv = {}));


/***/ }),

/***/ "./utils/env/env.ts":
/*!**************************!*\
  !*** ./utils/env/env.ts ***!
  \**************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var env_1 = __importDefault(__webpack_require__(/*! ../../config/env */ "./config/env/index.ts"));
var Env = /** @class */ (function () {
    function Env() {
    }
    Env.validateEnv = function (validationSchema) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, e_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        _a = this;
                        return [4 /*yield*/, validationSchema.parseAsync(env_1.default)];
                    case 1:
                        _a.validatedEnv = _b.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        e_1 = _b.sent();
                        throw e_1;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    Env.get = function (key) {
        var _a;
        if (((_a = this.validatedEnv) === null || _a === void 0 ? void 0 : _a[key]) != null)
            return this.validatedEnv[key];
        return env_1.default[key];
    };
    return Env;
}());
exports["default"] = Env;


/***/ }),

/***/ "./utils/env/env.validator.ts":
/*!************************************!*\
  !*** ./utils/env/env.validator.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.envValidatorSchema = void 0;
var zod_1 = __webpack_require__(/*! zod */ "zod");
var enums_1 = __webpack_require__(/*! ../enums */ "./utils/enums/index.ts");
exports.envValidatorSchema = zod_1.z.object({
    NODE_ENV: zod_1.z
        .string()
        .default(enums_1.AppEnv.DEVELOPMENT),
    PORT: zod_1.z.string(),
    DB_URL: zod_1.z.string(),
    API_VERSION: zod_1.z.string()
});


/***/ }),

/***/ "./utils/error/api.error.ts":
/*!**********************************!*\
  !*** ./utils/error/api.error.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ApiError = void 0;
var http_status_codes_1 = __webpack_require__(/*! http-status-codes */ "http-status-codes");
var zod_1 = __webpack_require__(/*! zod */ "zod");
var logger_1 = __importDefault(__webpack_require__(/*! ../../config/logger */ "./config/logger/index.ts"));
/**
 * @description Applications Error object class
 * Used to format and return error messages
 *
 * @returns  {object} ApiError class
 */
var ApiError = /** @class */ (function (_super) {
    __extends(ApiError, _super);
    function ApiError(code, message, details) {
        var _this = _super.call(this, message) || this;
        // const stack = Error.captureStackTrace(this, this.constructor);
        _this.code = code;
        _this.details = details;
        return _this;
    }
    /**
     * Method to handle intentionally thrown exceptions.
     * @param {object} err express error object
     * @param {object} req express request object
     * @param {object} res express response object
     * @param {function} next express middleware next object
     */
    ApiError.appError = function (err, req, res, next) {
        // error code
        var code = err.code, details = err.details;
        var status = "error";
        if (err instanceof zod_1.ZodError) {
            err: zod_1.ZodError;
            var message = err.message;
            code = http_status_codes_1.StatusCodes.FORBIDDEN;
            logger_1.default.error("\n                Zod validation error error:\n                status - ".concat(status, "\n                message - ").concat(message, " \n                url - ").concat(req.originalUrl, " \n                method - ").concat(req.method, " \n                IP - ").concat(req.ip, "\n                Error Stack - ").concat(err.stack, "\n          "));
            var errorMessage = JSON.parse(message).map(function (error) {
                return "".concat(error.path, ": ").concat(error.message, " \n");
            });
            return res.status(code).json({
                url: req.originalUrl,
                message: errorMessage.join(" "),
                status: status,
                type: (0, http_status_codes_1.getReasonPhrase)(code),
            });
        }
        else if (err instanceof ApiError ||
            (code && typeof code === "number")) {
            logger_1.default.error("\n            API error:\n            status - error\n            message - ".concat(err.message, " \n            url - ").concat(req.originalUrl, " \n            method - ").concat(req.method, " \n            IP - ").concat(req.ip, "\n            Error Stack - ").concat(err.stack, "\n          "));
            return res.status(code || 500).json({
                url: req.originalUrl,
                message: err.message,
                status: status,
                type: (0, http_status_codes_1.getReasonPhrase)(code || 500),
                error: details,
            });
        }
        else {
            next(err);
        }
    };
    /**
     * Generic error response handler of internal and unhandled exceptions.
     *
     * @param  {Object}   err
     * @param  {Object}   req
     * @param  {Object}   res
     * @param  {Function} next
     */
    ApiError.genericError = function (err, req, res, next) {
        var message = "An error occurred, we are looking into it.";
        var status = "error";
        var url = req.originalUrl;
        logger_1.default.error("\n        Generic error:\n        status - ".concat(status, "\n        message - ").concat(message, " \n        url - ").concat(url, " \n        method - ").concat(req.method, " \n        IP - ").concat(req.ip, "\n        Error Stack - ").concat(err.stack, "\n      "));
        return res.status(err.status || 500).json({
            message: message,
            status: status,
            url: url,
            type: (0, http_status_codes_1.getReasonPhrase)(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR),
        });
    };
    return ApiError;
}(Error));
exports.ApiError = ApiError;


/***/ }),

/***/ "./utils/error/index.ts":
/*!******************************!*\
  !*** ./utils/error/index.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ApiError = void 0;
var api_error_1 = __webpack_require__(/*! ./api.error */ "./utils/error/api.error.ts");
Object.defineProperty(exports, "ApiError", ({ enumerable: true, get: function () { return api_error_1.ApiError; } }));


/***/ }),

/***/ "../../../node_modules/app-root-path/index.js":
/*!****************************************************!*\
  !*** ../../../node_modules/app-root-path/index.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var lib = __webpack_require__(/*! ./lib/app-root-path.js */ "../../../node_modules/app-root-path/lib/app-root-path.js");
module.exports = lib(__dirname);

/***/ }),

/***/ "../../../node_modules/app-root-path/lib/app-root-path.js":
/*!****************************************************************!*\
  !*** ../../../node_modules/app-root-path/lib/app-root-path.js ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


module.exports = function(dirname) {
	var path = __webpack_require__(/*! path */ "path");
	var resolve = __webpack_require__(/*! ./resolve.js */ "../../../node_modules/app-root-path/lib/resolve.js");
	var appRootPath = resolve(dirname);

	var publicInterface = {
		resolve: function(pathToModule) {
			return path.join(appRootPath, pathToModule);
		},

		require: function(pathToModule) {
			return __webpack_require__("../../../node_modules/app-root-path/lib sync recursive")(publicInterface.resolve(pathToModule));
		},

		toString: function() {
			return appRootPath;
		},

		setPath: function(explicitlySetPath) {
			appRootPath = path.resolve(explicitlySetPath);
			publicInterface.path = appRootPath;
		},

		path: appRootPath
	};

	return publicInterface;
};

/***/ }),

/***/ "../../../node_modules/app-root-path/lib/resolve.js":
/*!**********************************************************!*\
  !*** ../../../node_modules/app-root-path/lib/resolve.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


// Dependencies
var path = __webpack_require__(/*! path */ "path");

// Load global paths
var globalPaths = (__webpack_require__(/*! module */ "module").globalPaths);

// Guess at NPM's global install dir
var npmGlobalPrefix;
if ('win32' === process.platform) {
	npmGlobalPrefix = path.dirname(process.execPath);
} else {
	npmGlobalPrefix = path.dirname(path.dirname(process.execPath));
}
var npmGlobalModuleDir = path.resolve(npmGlobalPrefix, 'lib', 'node_modules');

// Save OS-specific path separator
var sep = path.sep;

// If we're in webpack, force it to use the original require() method
var requireFunction = ( true)
	? require
	: 0;

const isInstalledWithPNPM = function(resolved) {
	const pnpmDir = sep + '.pnpm';

	for (const globalPath of globalPaths) {
		if (-1 !== globalPath.indexOf(pnpmDir) && -1 !== resolved.indexOf(pnpmDir)) {
			return true;
		}
	}
	return false;
}

const getFirstPartFromNodeModules = function(resolved) {
	const nodeModulesDir = sep + 'node_modules';

	if (-1 !== resolved.indexOf(nodeModulesDir)) {
		const parts = resolved.split(nodeModulesDir);
		if (parts.length) {
			return parts[0];
		}
	}

	return null;
}

// Resolver
module.exports = function resolve(dirname) {
	// Check for environmental variable
	if (process.env.APP_ROOT_PATH) {
		return path.resolve(process.env.APP_ROOT_PATH);
	}

	// Defer to Yarn Plug'n'Play if enabled
	if (process.versions.pnp) {
		try {
			var pnp = requireFunction('pnpapi');
			return pnp.getPackageInformation(pnp.topLevel).packageLocation;
		} catch (e) {}
	}

	// Defer to main process in electron renderer
	if ('undefined' !== typeof window && window.process && 'renderer' === window.process.type) {
		try {
			var remote = requireFunction('electron').remote;
			return remote.require('app-root-path').path;
		} catch (e) {}
	}

	// Defer to AWS Lambda when executing there
	if (process.env.LAMBDA_TASK_ROOT && process.env.AWS_EXECUTION_ENV) {
		return process.env.LAMBDA_TASK_ROOT;
	}

	var resolved = path.resolve(dirname);
	var alternateMethod = false;
	var appRootPath = null;

	// Check if the globalPaths contain some folders with '.pnpm' in the path
	// If yes this means it is most likely installed with pnpm
	if (isInstalledWithPNPM(resolved)) {
		appRootPath = getFirstPartFromNodeModules(resolved);

		if (appRootPath) {
			return appRootPath;
		}
	}

	// Make sure that we're not loaded from a global include path
	// Eg. $HOME/.node_modules
	//     $HOME/.node_libraries
	//     $PREFIX/lib/node
	globalPaths.forEach(function(globalPath) {
		if (!alternateMethod && 0 === resolved.indexOf(globalPath)) {
			alternateMethod = true;
		}
	});

	// If the app-root-path library isn't loaded globally,
	// and node_modules exists in the path, just split __dirname
	if (!alternateMethod) {
		appRootPath = getFirstPartFromNodeModules(resolved);
	}

	// If the above didn't work, or this module is loaded globally, then
	// resort to require.main.filename (See http://nodejs.org/api/modules.html)
	if ((alternateMethod || null == appRootPath)) {
		if (requireFunction.main) {
			appRootPath = path.dirname(requireFunction.main.filename);
		} else {
			// This is the case when app-root-path is bundle'd to a commonjs2 format and is being called from an esm file.
			// In those cases require.main is undefined (See https://nodejs.org/api/modules.html#accessing-the-main-module)
			// At that point we can only get the root from looking at the callee
			appRootPath = path.dirname(process.argv[1]);
		}
	}

	// Handle global bin/ directory edge-case
	if (alternateMethod && -1 !== appRootPath.indexOf(npmGlobalModuleDir) && (appRootPath.length - 4) === appRootPath.indexOf(sep + 'bin')) {
		appRootPath = appRootPath.slice(0, -4);
	}

	// Return
	return appRootPath;
};


/***/ }),

/***/ "../../../node_modules/app-root-path/lib sync recursive":
/*!*****************************************************!*\
  !*** ../../../node_modules/app-root-path/lib/ sync ***!
  \*****************************************************/
/***/ ((module) => {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = () => ([]);
webpackEmptyContext.resolve = webpackEmptyContext;
webpackEmptyContext.id = "../../../node_modules/app-root-path/lib sync recursive";
module.exports = webpackEmptyContext;

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("cors");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("dotenv");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("express");

/***/ }),

/***/ "express-fileupload":
/*!*************************************!*\
  !*** external "express-fileupload" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = require("express-fileupload");

/***/ }),

/***/ "helmet":
/*!*************************!*\
  !*** external "helmet" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("helmet");

/***/ }),

/***/ "http-status-codes":
/*!************************************!*\
  !*** external "http-status-codes" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("http-status-codes");

/***/ }),

/***/ "winston":
/*!**************************!*\
  !*** external "winston" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("winston");

/***/ }),

/***/ "zod":
/*!**********************!*\
  !*** external "zod" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("zod");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("http");

/***/ }),

/***/ "module":
/*!*************************!*\
  !*** external "module" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("module");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./index.ts");
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.js.map