let headers = $request.headers;
headers['X-YouTube-Premium'] = 'true'; // Giả lập trạng thái Premium
headers['User-Agent'] = 'YouTubePremium/20.16.7'; // Giả lập ứng dụng Premium
$done({ headers });
