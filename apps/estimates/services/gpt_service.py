from openai import OpenAI
from django.conf import settings

client = OpenAI(api_key=settings.OPENAI_API_KEY)


def generate_cost_explanation(structured_data):

    prompt = f"""
    You are a construction cost estimation expert.

    Based on the following cost breakdown:

    {structured_data}

    Provide:
    1. Detailed explanation of material distribution
    2. Major cost drivers
    3. Cost optimization suggestions
    4. Risk factors affecting final price

    Keep it professional and structured.
    """

    response = client.chat.completions.create(
        model="gpt-4o-mini",
        messages=[
            {"role": "system", "content": "You are a civil engineering cost consultant."},
            {"role": "user", "content": prompt}
        ],
        temperature=0.4,
    )

    explanation = response.choices[0].message.content

    # Token usage tracking
    tokens_used = response.usage.total_tokens

    return explanation, tokens_used
