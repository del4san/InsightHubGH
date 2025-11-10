(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/MapStream.tsx [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mapbox$2d$gl$2f$dist$2f$mapbox$2d$gl$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/mapbox-gl/dist/mapbox-gl.js [client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
const MapStream = ()=>{
    _s();
    const mapContainerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // ✅ Correct way to load token in Next.js
    const token = ("TURBOPACK compile-time value", "pk.eyJ1IjoiZGVsNHNhbiIsImEiOiJjbWhwYW9pcDEwY2toMmpzaDQ3NTdqNGx5In0.nwiOd8Nq8MdGEUOsHFqSZg");
    if (!token || !token.startsWith('pk.')) {
        console.error('⚠️ Mapbox token is missing or invalid');
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                color: 'red'
            },
            children: "Mapbox token is missing or invalid."
        }, void 0, false, {
            fileName: "[project]/src/components/MapStream.tsx",
            lineNumber: 12,
            columnNumber: 12
        }, ("TURBOPACK compile-time value", void 0));
    }
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mapbox$2d$gl$2f$dist$2f$mapbox$2d$gl$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].accessToken = token;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MapStream.useEffect": ()=>{
            if (!mapContainerRef.current) return;
            const map = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mapbox$2d$gl$2f$dist$2f$mapbox$2d$gl$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].Map({
                container: mapContainerRef.current,
                style: 'mapbox://styles/mapbox/streets-v11',
                center: [
                    0,
                    0
                ],
                zoom: 2
            });
            map.addControl(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mapbox$2d$gl$2f$dist$2f$mapbox$2d$gl$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].NavigationControl());
            return ({
                "MapStream.useEffect": ()=>map.remove()
            })["MapStream.useEffect"];
        }
    }["MapStream.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: mapContainerRef,
        style: {
            width: '100%',
            height: '100vh'
        }
    }, void 0, false, {
        fileName: "[project]/src/components/MapStream.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(MapStream, "JDsoK+vCj+KIdyRFXV6E+3zLK1c=");
_c = MapStream;
const __TURBOPACK__default__export__ = MapStream;
var _c;
__turbopack_context__.k.register(_c, "MapStream");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/MapStream.tsx [client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/components/MapStream.tsx [client] (ecmascript)"));
}),
]);

//# sourceMappingURL=src_components_MapStream_tsx_97e72e88._.js.map