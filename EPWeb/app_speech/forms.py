from django import forms
from .models import Sentence


class SentenceModelForm(forms.ModelForm):
    class Meta:
        model = Sentence
