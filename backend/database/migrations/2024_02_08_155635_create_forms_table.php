<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateFormsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('forms', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            // store the form name, and the form data
            $table->string('name');
            //label
            $table->string('label');
            //created date
            // $table->date('created_date');
            //Exception has occurred.
//PDOException: SQLSTATE[22007]: Invalid datetime format: 1292 Incorrect date value: '2024-02-08T17:26:21.531Z' for column 'created_date' at row 1


            // $table->json('data');
            // store the form status
            $table->enum('status', ['active', 'inactive'])->default('active');

        });
        //Create form components table, include component name, component type, position, labelw and JSON data, and form_id
        Schema::create('form_components', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->string('name');
            $table->string('type');
            $table->integer('position');
            $table->string('label');
            // $table->json('data');
            $table->text('json_data');
            $table->foreignId('form_id')->constrained('forms')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('forms');
    }
}
