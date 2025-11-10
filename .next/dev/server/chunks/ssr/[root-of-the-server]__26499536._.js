module.exports = [
"[externals]/mapbox-gl [external] (mapbox-gl, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("mapbox-gl", () => require("mapbox-gl"));

module.exports = mod;
}),
"[project]/src/components/MapStream.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$mapbox$2d$gl__$5b$external$5d$__$28$mapbox$2d$gl$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/mapbox-gl [external] (mapbox-gl, cjs)");
;
;
;
const MapStream = ()=>{
    const mapContainerRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])(null);
    // ✅ Correct way to load token in Next.js
    const token = ("TURBOPACK compile-time value", "pk.eyJ1IjoiZGVsNHNhbiIsImEiOiJjbWhwYW9pcDEwY2toMmpzaDQ3NTdqNGx5In0.nwiOd8Nq8MdGEUOsHFqSZg");
    if (!token || !token.startsWith('pk.')) {
        console.error('⚠️ Mapbox token is missing or invalid');
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
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
    __TURBOPACK__imported__module__$5b$externals$5d2f$mapbox$2d$gl__$5b$external$5d$__$28$mapbox$2d$gl$2c$__cjs$29$__["default"].accessToken = token;
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        if (!mapContainerRef.current) return;
        const map = new __TURBOPACK__imported__module__$5b$externals$5d2f$mapbox$2d$gl__$5b$external$5d$__$28$mapbox$2d$gl$2c$__cjs$29$__["default"].Map({
            container: mapContainerRef.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [
                0,
                0
            ],
            zoom: 2
        });
        map.addControl(new __TURBOPACK__imported__module__$5b$externals$5d2f$mapbox$2d$gl__$5b$external$5d$__$28$mapbox$2d$gl$2c$__cjs$29$__["default"].NavigationControl());
        return ()=>map.remove();
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
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
const __TURBOPACK__default__export__ = MapStream;
}),
"[project]/src/components/MapStream.tsx [ssr] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/components/MapStream.tsx [ssr] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__26499536._.js.map