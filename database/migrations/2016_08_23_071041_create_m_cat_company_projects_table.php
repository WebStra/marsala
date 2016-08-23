<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateMCatCompanyProjectsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('m_cat_companies_projects', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('m_cat_company_id')->unsigned();
            $table->integer('project_id')->unsigned();
            $table->boolean('active')->default(1)->index();
            $table->timestamps();

            $table->foreign('m_cat_company_id')->references('id')->on('m_cat_companies')->onDelete('cascade')->onUpdate('cascade');
            $table->foreign('project_id')->references('id')->on('projects')->onDelete('cascade')->onUpdate('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('m_cat_companies_projects');
    }
}
