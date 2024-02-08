<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class FormComponent extends Model
{
    protected $fillable = ['form_id', 'type', 'label', 'json_data', 'position'];

    public function form()
    {
        return $this->belongsTo(Form::class);
    }
}
