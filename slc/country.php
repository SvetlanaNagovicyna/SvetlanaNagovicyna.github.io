<?php

declare(strict_types=1);

function getIp(): string
{
    if (!empty($_SERVER['HTTP_CLIENT_IP'])) {
        return $_SERVER['HTTP_CLIENT_IP'];
    }

    if (!empty($_SERVER['HTTP_X_FORWARDED_FOR'])) {
        return $_SERVER['HTTP_X_FORWARDED_FOR'];
    }

    return $_SERVER['REMOTE_ADDR'];
}

$ip = getIp();

$ipData = @json_decode(file_get_contents('http://www.geoplugin.net/json.gp?ip=' . $ip), true);

$countryCode = $ipData['geoplugin_countryCode'] ?? null;

header('Content-type: application/json');
http_response_code(200);
echo json_encode(['country' => $countryCode]);