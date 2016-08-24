<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateConsultantaTables extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
          Schema::create('consultanta', function(Blueprint $table)
        {
            $table->increments('id');
            $table->string('icon', 225);
            $table->boolean('active')->default(1)->index();
            $table->timestamps();
        });

        Schema::create('consultanta_translations', function(Blueprint $table)
        {
            $table->increments('id');

            $table->unsignedInteger('consultanta_id');
            $table->unsignedInteger('language_id');
            $table->string('title', 255);
            $table->unique(['consultanta_id', 'language_id']);

            $table->foreign('consultanta_id')->references('id')->on('consultanta')->onDelete('cascade')->onUpdate('cascade');
            $table->foreign('language_id')->references('id')->on('languages')->onDelete('cascade')->onUpdate('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('consultanta');
        Schema::drop('consultanta_translations');
    }
}
