<?php
namespace App\Http\Controllers;

use App\Models\Form;
use App\Models\FormComponent;
use Illuminate\Http\Request;

class FormController extends Controller
{
    public function store(Request $request)
    {
        $form = Form::create($request->only(['name', 'label']));

        foreach ($request->input('components', []) as $component) {
            // $form->components()->create($component);
            FormComponent::create($component);

        }

        return response()->json($form, 201);
    }

    public function index()
    {
        $forms = Form::with('components')->get();
        return response()->json($forms);
    }

    public function show($id)
    {
        $form = Form::with('components')->findOrFail($id);
        return response()->json($form);
    }
}

