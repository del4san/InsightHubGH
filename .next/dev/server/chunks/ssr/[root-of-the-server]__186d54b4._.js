module.exports = [
"[externals]/mapbox-gl [external] (mapbox-gl, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("mapbox-gl", () => require("mapbox-gl"));

module.exports = mod;
}),
"[project]/frontend/src/components/MapStream.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MapStream
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$mapbox$2d$gl__$5b$external$5d$__$28$mapbox$2d$gl$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/mapbox-gl [external] (mapbox-gl, cjs)");
'use client';
;
;
;
;
__TURBOPACK__imported__module__$5b$externals$5d2f$mapbox$2d$gl__$5b$external$5d$__$28$mapbox$2d$gl$2c$__cjs$29$__["default"].accessToken = 'pk.eyJ1IjoiZGVsNHNhbiIsImEiOiJjbWhsejg1Y24xbmhtMmxzaDIzbnZtdW15In0.mAUSQhUmaQKIG43x9pjAuQ'; // replace with your actual token
function MapStream() {
    const mapContainerRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        if (!mapContainerRef.current) return;
        const map = new __TURBOPACK__imported__module__$5b$externals$5d2f$mapbox$2d$gl__$5b$external$5d$__$28$mapbox$2d$gl$2c$__cjs$29$__["default"].Map({
            container: mapContainerRef.current,
            style: 'mapbox://styles/mapbox/streets-v12',
            center: [
                -0.186964,
                5.6836
            ],
            zoom: 7
        });
        map.on('load', ()=>{
            console.log('✅ Map loaded');
        });
        map.on('error', (e)=>{
            console.error('❌ Mapbox error:', e.error);
        });
        return ()=>{
            map.remove();
        };
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        className: "relative h-screen w-screen",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                ref: mapContainerRef,
                className: "absolute inset-0 z-0",
                style: {
                    touchAction: 'auto'
                }
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/MapStream.tsx",
                lineNumber: 37,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "absolute top-4 left-4 z-10 bg-white p-4 rounded shadow",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h1", {
                        className: "text-xl font-bold mb-2",
                        children: "InsightHubGH"
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/MapStream.tsx",
                        lineNumber: 43,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                        className: "text-sm text-gray-600",
                        children: "Map baseline loaded."
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/MapStream.tsx",
                        lineNumber: 44,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/src/components/MapStream.tsx",
                lineNumber: 42,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/frontend/src/components/MapStream.tsx",
        lineNumber: 36,
        columnNumber: 5
    }, this);
}
}),
"[project]/frontend/src/components/MapStream.tsx [ssr] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/frontend/src/components/MapStream.tsx [ssr] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__186d54b4._.js.map