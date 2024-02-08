<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Form extends Model
{
    protected $fillable = ['name', 'label'];

    public function components()
    {
        return $this->hasMany(FormComponent::class);
    }
}
