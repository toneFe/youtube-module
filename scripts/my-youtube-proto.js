let body = $response.body;
let obj = JSON.parse(body);
if (obj && obj.player && obj.player.adPlacements) {
    obj.player.adPlacements = []; // Xóa quảng cáo
}
if (obj && obj.account && obj.account.isPremium) {
    obj.account.isPremium = true; // Kích hoạt trạng thái Premium
    obj.account.features = ['background_play', 'offline_access', 'pip']; // Kích hoạt phát nền, tải video, PiP
}
$done({ body: JSON.stringify(obj) });
