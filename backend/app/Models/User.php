<?php

namespace App\Models;

use Illuminate\Auth\Authenticatable;
use Illuminate\Contracts\Auth\Access\Authorizable as AuthorizableContract;
use Illuminate\Contracts\Auth\Authenticatable as AuthenticatableContract;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Laravel\Lumen\Auth\Authorizable;

class User extends Model implements AuthenticatableContract, AuthorizableContract
{
    use Authenticatable, Authorizable, HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     *
     */
    /**  List of fields that can be filled by the user
     *
     *         Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('first_name')->nullable(); // Maps to "firstName"
            $table->string('last_name')->nullable(); // Maps to "lastName", nullable because it's disabled in the form and might not be submitted
            $table->integer('age')->nullable(); // Maps to "age", integer type for age
            $table->text('bio')->nullable(); // Maps to "bio", text type for longer input
            $table->string('password'); // Maps to "password"
            $table->string('language')->nullable(); // Maps to "language", nullable because it's a select and might not be required
            $table->timestamps(); // Adds created_at and updated_at columns
        });
        */


    protected $fillable = [
        'name', 'email',   'password', 'firstname', 'lastname', 'age', 'bio', 'language', 'role', 'status', 'created_at', 'updated_at'

    ];

    /**
     * The attributes excluded from the model's JSON form.
     *
     * @var array
     */
    protected $hidden = [
        'password',
    ];
}
