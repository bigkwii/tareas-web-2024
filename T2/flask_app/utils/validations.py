import re
import filetype

# -- producto validations --

def validate_type(value):
    # must be "Fruta" or "Verdura"
    if value != "Fruta" and value != "Verdura":
        print("Invalid type")
        return False
    return True

def validate_products(selected_products_arr, selected_type, types_dict):
    # there must be between 1 and 5 products selected
    # no duplicates, and they all must be of the same type
    # selected_type must have been validated before
    # types dict has all verduras of each type: {"type": [id1, id2, ...]}
    if len(selected_products_arr) < 1 or len(selected_products_arr) > 5:
        print("Invalid number of products")
        return False
    if len(selected_products_arr) != len(set(selected_products_arr)):
        print("Duplicates found")
        return False
    # check if all products are of the same type
    product_type = selected_type
    for product_id in selected_products_arr:
        for type_, products in types_dict.items():
            if product_id in products:
                if product_type != type_:
                    print("Different types found")
                    return False
    return True

def validate_description(value):
    # must be either empty or have at most 200 characters
    value_to_be_saved = value.strip()
    if len(value_to_be_saved) > 200:
        print("Description too long")
        return False
    return True

def validate_images(image1, image2, image3):
    # 1 to 3 images
    # only jpg, jpeg and png
    ALLOWED_EXTENSIONS = {"png", "jpg", "jpeg"}
    ALLOWED_MIMETYPES = {"image/jpeg", "image/png"}
    at_least_one_image = False
    images = [image1, image2, image3]
    for image in images:
        if image is None:
            continue
        if image.filename == "":
            continue
        ftype_guess = filetype.guess(image)
        if ftype_guess.extension not in ALLOWED_EXTENSIONS:
            print("Invalid extension")
            return False
        if ftype_guess.mime not in ALLOWED_MIMETYPES:
            print("Invalid mime")
            return False
        at_least_one_image = True
    if not at_least_one_image:
        print("No images submitted")
        return False
    return True
    
def validate_region(value):
    # must be a number between 1 and 16
    if not value.isdigit():
        print("Region not a number")
        return False
    value = int(value)
    if value < 1 or value > 16:
        print("Region out of range")
        return False
    return True

def validate_comuna(value, selected_region, region_dict):
    # must be a number, and must be a valid comuna for the region
    # selected_region must have been validated before
    # region_dict has all comunas of each region: {"region": ["id1", "id2", ...]}
    if not value.isdigit():
        print("Comuna not a number")
        return False
    if value not in region_dict[selected_region]:
        print("Comuna not in region")
        return False
    return True

def validate_productor(value):
    # can't be empty. must have at most 80 characters
    value_to_be_saved = value.strip()
    if len(value_to_be_saved) == 0 or len(value_to_be_saved) > 80:
        print("Invalid productor")
        return False
    return True

def validate_email(value):
    # must pass the regex test and have at most 30 characters
    if len(value) > 30:
        print("Invalid email")
        return False
    email_regex = r"^[^\s@]+@[^\s@]+\.[^\s@]+$"
    if not re.match(email_regex, value):
        print("Invalid email")
        return False
    return True

def validate_phone(value):
    # must pass the regex test and have at most 15 characters
    if len(value) > 15:
        print("Invalid phone")
        return False
    phone_regex = r"^^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$$"
    if not re.match(phone_regex, value):
        print("Invalid phone")
        return False
    return True
    
def validate_producto(tipo, selected_products_arr, description, image1, image2, image3, region, comuna, productor, email, phone, region_dict, types_dict):
    # validate all fields
    validations = [
        validate_type(tipo),
        validate_products(selected_products_arr, tipo, types_dict),
        validate_description(description),
        validate_images(image1, image2, image3),
        validate_region(region),
        validate_comuna(comuna, region, region_dict),
        validate_productor(productor),
        validate_email(email),
        validate_phone(phone)
    ]
    return all(validations)