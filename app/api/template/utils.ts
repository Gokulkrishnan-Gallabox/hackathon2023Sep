import { TemplateRequest } from "./types";

export const getPromt = (body: TemplateRequest) => {
  const { bioOfCompany, businessName, language, tone, topic } = body;
  const aiPrompt = `Imagine you are a senior content writer. You are writing a WhatsApp template for ${businessName} they ${bioOfCompany}.** Write a short WhatsApp template about **${topic}** in **${language}.** The tone must be **${tone}.**
   
    **Fields to fill in WhatsApp template** 
    
    - Template name - It is a mandatory field
    - Category - It is a mandatory field
    - Language - It is a mandatory field
    - Header - It is optional field
    - Body - It is a mandatory field
    - Footer - It is optional field
    - Buttons - It is optional field
    
    **Best practices of WhatsApp template creation**
    
    - A variable has to be in the format of {{1}}, i.e curly braces with a number.
    - A variable should be enclosed in double curly braces. example ‘{{1}}’
    - variable must not contain any special characters such as a #, $, or %.
    - Variable parameters are not sequential. example {{1}}, {{2}}, {{3}}, {{4}}, {{5}}
    - The message template shouldn’t violate WhatsApp’s Commerce Policy
    - The content must not contain potentially abusive or threatening content, such as threatening a customer with legal action or threatening to publicly shame them.
    
    **Knowledge about WhatsApp template** 
    
    1. Template name
        1. Maximum 512 characters
        2. only lowercase characters and ‘_’ can be used.
    2. Category
        1. Utility templates
            1. Utility templates relate to a specific, agreed-upon transaction and accomplish one of the following: Confirm, suspend, or change a transaction or subscription.
            2. Any template that has a mix of utility and marketing content will be classified as a marketing template.
        2. Marketing templates
            1.  are our most flexible. They do not relate to a specific, agreed-upon transaction and instead may relate to the business and/or its products/services. 
            2. These templates may include promotions or offers; welcoming or closing messages; updates, invitations or recommendations; or requests to respond or complete a new transaction.
    3. Language
        1. Can select any human language
    4. Header
        1. One can choose to create a template with no header
        2. Or they can choose one of the following options - text, image, video, Document
        3. If text is chosen, it can have upto 1 variable and can be of 60 characters length
    5. Body
        1. The main message content must be added here
        2. It could be of maximum 1024 char
        3. Emojis and markdown are supported.
        4. Supports variables
    6. Footer
        1. It could be of maximum 60 characters
        2. When creating marketing templates, add a unsubscribe message with a keyword ‘STOP’ in the footer
    7. Button
        1. One can choose to create a template with no button
        2. They can choose Call to action (CTA) option or Quick replies option
        3. The button text can be of 25 characters
        4. CTA
            1. one CTA is minimum is required, maximum 2 CTA can be added
            2. Template can have one phone number and one URL
            3. URL of website that loads in the device's default mobile web browser when the button is tapped by the app user.
            4. URL Supports 1 variable, appended to the end of the URL string.
            5. URL can be of 2000 characters maximum.
        5. Quick replies
            1. Minimum of 1 and maximum of 3 buttons can be added
    
    **Example**
    
    Imagine you are a senior content writer. You are writing a WhatsApp template for ABC clothing and it is of ecommerce industry. Write a short WhatsApp template about abandonment cart in English The tone can be quirky.
    Give it as a json don't explain anything
    below is the example template, give in this format
    {
        "template_name": "diwali_discount",
        "category": "marketing_templates",
        "language": "en",
        "header": {
            "type": "text",
            "text": "Enjoy 10% discount on Diwali!"
        },
        "body": "Celebrate the festival of lights with A2Gupta mittai shop! Get 10% off on all our delicious sweets and snacks. Use code DIWALI10 at checkout and indulge in the joy of Diwali. Hurry, offer valid till stocks last!",
        "footer": "To unsubscribe from our messages, reply STOP.",
        "buttons": {
            "type": "cta",
            "buttons": [
                {
                    "type": "url",
                    "text": "Shop now",
                    "url": "https://www.a2guptamittai.com/{{1}}"
                },
                {
                    "type": "phone_number",
                    "text": "Call us",
                    "phone_number": "+919876543210"
                }
            ]
        }
    }

    `;
  return aiPrompt;
};
