<li class="dropdown user user-menu">
    <a href="#" class="dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
        <img src="http://gamepart.ru/sites/default/files/styles/medium/public/avatars/fallout-seriya-igr-avatary_4.gif?itok=Hlv49l45"
             class="user-image"
             alt="{{ \Auth::user()->name }}"><span
                class="hidden-xs">{{ \Auth::user()->name }}</span> <span class="caret"></span></a>
    <ul class="dropdown-menu" role="menu">
        <li>
            <a href="{{ route('home') }}">
                <i class="fa fa-arrow-left"></i> {{ trans('Go to site') }}
            </a>
        </li>

        <li>
            <a href="{{ url('admin/logout') }}">
                <i class="glyphicon glyphicon-log-out"></i> {{ trans('Logout') }}
            </a>
        </li>
    </ul>
</li>