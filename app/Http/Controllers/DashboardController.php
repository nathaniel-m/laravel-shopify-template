<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\User;

class DashboardController extends Controller
{
    /**
     * Here the app is initialized
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\View\Factory|\Illuminate\Contracts\View\View
     */
    public function index()
    {
        /** @var User $user */
        info('DashboardController@index');
        return Inertia::render('Dashboard');
    }
}