<?php

use App\Http\Controllers\DashboardController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

//login as user
$routeAttributes = [
    'middleware' => ['verify.shopify']
];

Route::group($routeAttributes, function () {
    Route::get('/', [DashboardController::class, 'index'])->name('home');
});
