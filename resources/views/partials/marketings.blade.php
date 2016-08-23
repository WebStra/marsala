<section class="projects">
    <div class="container-fluid">
        <div class="row">
            <div class="col-exl-4 col-xs-12">
                <h2 class="title">Promovare digitală statistici și analitică</h2>
                <h4 class="subtitle">Ce intrumente folosim pentru mai mulți clienți în afacerea ta?</h4>
                <div class="clearfix"></div>
                <div class="row">
                    <div class="col-xsm-6 col-xs-12 col-exl-12">
                        <ul class="list-groups">
                            @foreach($marketings as $marketing)
                                <li data-group="group_{{ $marketing->slug }}">{{ strtoupper($marketing->name) }}</li>
                            @endforeach
                        </ul>
                    </div>
                    <div class="col-xsm-6 col-xs-12 col-exl-12">
                        <h4>Instrumentul de calcul și analiză a rezultatelor activitații Social Media
                            Marketing</h4>
                        <a href="/images/ico-user.jpg" class="btn btn-second" download>Descarcă gratuit</a>
                    </div>
                </div>


            </div>
            <div class="col-exl-8 col-xs-12">
                <div class="wrap-monitor">
                    <div class="monitor">
                        <ul class="group">
                            @foreach($marketings as $marketing)
                                @foreach($marketing->categories as $category)
                                    @if(count($category->m_cat_companies))
                                        <li class="item group_{{ $marketing->slug }}" data-filter="{{ $category->present()->renderFilter() }}">
                                            <img src="{{ $category->icon }}" alt="img1">
                                            <span>{{ strtoupper($category->name) }}</span>
                                        </li>
                                    @endif
                                @endforeach
                            @endforeach
                        </ul>

                        <div class="owl-carousel carousel-companies list-companies">

                        </div>
                        <div class="owl-carousel clearfix carousel-projects list-projects">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="angar">
        <div class="list-companies">
            @foreach($marketings as $marketing)
                @foreach($marketing->categories as $category)
                    @foreach($category->m_cat_companies as $m_cat_company)
                        @if(count($m_cat_company->m_cat_companies_projects))
                            <div class="item {{ $category->name }}" data-filter=".company-{{ $m_cat_company->company->name }}">
                                <span><img src="{{ $m_cat_company->company->logo }}" alt=""></span>
                            </div>
                        @endif
                    @endforeach
                @endforeach
            @endforeach
        </div>
        <div class="list-projects">
            @foreach($marketings as $marketing)
                @foreach($marketing->categories as $category)
                    @foreach($category->m_cat_companies as $m_cat_company)
                        @foreach($m_cat_company->m_cat_companies_projects as $m_cat_companies_project)
                            <div class="item {{ $category->name }} company-{{ $m_cat_company->company->name }}">
                                {{ $m_cat_companies_project->project->name }}
                                <img src="{{ $m_cat_companies_project->project->image }}" alt="">
                            </div>
                        @endforeach
                    @endforeach
                @endforeach
            @endforeach
        </div>
    </div>
</section>